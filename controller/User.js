const HttpError = require("../models/http-error");
const { User } = require("../models/User");

exports.fetchUserData = async (req, res, next) => {
  const { id } = req.userData;
  try {
    const user = await User.findById(id, "-password");

    if (!user) {
      return next(new HttpError("User Not Found", 404));
    }

    res.status(200).json({ success: true, user });
  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
};

exports.updateUser = async (req, res, next) => {
  const { id } = req.userData;
  try {
    const user = await User.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      "-password"
    );
    if (!user) {
      return next(new HttpError("User Not Found", 404));
    }
    res.status(200).json({
      success: true,
      user: req.body,
    });
  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
};
