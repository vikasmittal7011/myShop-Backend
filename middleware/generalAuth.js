const HttpError = require("../models/http-error");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      throw new Error("Authentication Failed!!");
    }
    const tokenValue = jwt.verify(token, process.env.JWT_TOKEN);
    if (tokenValue) {
      req.userData = { id: tokenValue.id };
      next();
    }
  } catch (err) {
    return next(new HttpError("Authentication Failed!!", 401));
  }
};
