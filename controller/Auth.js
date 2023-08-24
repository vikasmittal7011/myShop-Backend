const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { User } = require("../models/User");
const HttpError = require("../models/http-error");

const jwt_key = process.env.JWT_TOKEN;
const salt = process.env.SALT;

exports.createUser = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return next(new HttpError("Enter valid credential", 400));
  }
  let user;
  try {
    user = await User.findOne({ email: req.body.email });
    if (user) {
      return next(
        new HttpError("Email is already exsit, account is not created", 422)
      );
    }

    bcrypt.hash(req.body.password, parseInt(salt)).then(async (pass) => {
      const createUser = { ...req.body, password: pass };
      user = await User.create(createUser);
      token = jwt.sign({ id: user.id, role: user.role }, jwt_key);
      return res.json({
        success: true,
        user: { role: user.role, id: user.id },
        token,
      });
    });
  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
};

exports.loginUser = async (req, res, next) => {
  let { password } = req.body;
  let user, comparePassword, token;
  try {
    user = await User.findOne({ email: req.body.email });

    if (!user) {
      return next(new HttpError("Enter valid credential", 404));
    }

    comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return next(new HttpError("Enter valid credential", 404));
    }

    const { _id, role } = user;

    token = jwt.sign({ id: _id, role: role }, jwt_key);

    res.json({ token, user: { role: user.role, id: user.id }, success: true });
  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
};
