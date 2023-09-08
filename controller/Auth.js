const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { User } = require("../models/User");
const HttpError = require("../models/http-error");
const transporter = require("../utils/nodemailer");

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

    res.json({ token, success: true });
  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
};

exports.resetPasswordRequest = async (req, res, next) => {
  let { email } = req.body;
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return next(new HttpError("User is not exist, check your email", 404));
    }
    const info = await transporter.sendMail({
      from: "myshop@gmail.com",
      to: email,
      subject: "Reset Your Password!!",
      html: `<p>Click <a href="http://localhost:3000/reset-password">here</a> to reset your password!!</p>`, // html body
    });

    if (info) {
      res.json({ success: true });
    }
    res.json({
      success: false,
      message: "Failed to send email please try again laterF",
    });
  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
};
