const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const { Order } = require("../models/Orders");

exports.createOrder = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }
  try {
    const order = new Order(req.body);
    const data = await order.save();
    if (data) {
      res.status(200).json({ success: true, data });
    } else {
      return next(new HttpError("Order not placed", 422));
    }
  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
};
