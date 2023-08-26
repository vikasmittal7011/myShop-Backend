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
    const { id } = req.userData;
    const order = new Order({ ...req.body, user: id });
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

exports.fetchUserOrders = async (req, res, next) => {
  const { user } = req.params;
  try {
    const data = await Order.find({ user: user }).populate("items");
    if (data) {
      res.status(200).json({ success: true, data });
    } else {
      return next(new HttpError("Failed to fetch orders", 422));
    }
  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
};

exports.fetchOrders = async (req, res, next) => {
  let query = Order.find({});
  let totalProductsQuery = Order.find({});

  if (req.query._sort && req.query._order) {
    query = query.sort({ [req.query._sort]: req.query._order });
  }

  const totalDocs = await totalProductsQuery.count().exec();

  if (req.query._page && req.query._limit) {
    const pageSize = req.query._limit;
    const page = req.query._page;
    query = query.skip(pageSize * (page - 1)).limit(pageSize);
  }

  try {
    const docs = await query.exec();
    res.set("X-Total-Count", totalDocs);
    res.status(200).json({ success: true, orders: docs });
  } catch (err) {
    res.status(400).json({ message: "Internal Server Error" });
  }
};

exports.updateOrders = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await Order.findByIdAndUpdate(id, req.body);
    if (data) {
      res.status(200).json({ success: true, data: req.body });
    } else {
      res.status(422).json({ message: "Update failed" });
    }
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};
