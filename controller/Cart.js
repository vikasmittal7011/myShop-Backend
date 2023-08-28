const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const { Cart } = require("../models/Cart");

exports.addToCart = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return next(new HttpError(errorMessages, 401));
  }
  try {
    const { id } = req.userData;
    const cart = await new Cart({ ...req.body, user: id }).populate("item");
    const data = await cart.save();
    if (data) {
      res.status(200).json({ success: true, data });
    } else {
      return next(new HttpError("Item failed to add to cart", 422));
    }
  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
};

exports.fetchUserItems = async (req, res, next) => {
  const { id } = req.userData;
  try {
    const cart = await Cart.find({ user: id }).populate("item");
    if (cart) {
      res.status(200).json({ success: true, cart });
    } else {
      return next(new HttpError("Item failed to add to cart", 422));
    }
  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
};

exports.updateCart = async (req, res, next) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findByIdAndUpdate(id, req.body, {
      new: true,
    }).populate("item");
    if (cart) {
      res.status(200).json({ success: true, cart });
    } else {
      return next(new HttpError("Item failed to add to cart", 422));
    }
  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
};

exports.deleteItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findByIdAndRemove(id);
    if (cart) {
      res.status(200).json({ success: true, id });
    } else {
      return next(new HttpError("Item failed to add to cart", 422));
    }
  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
};

exports.deleteAllItem = async (req, res, next) => {
  const { id } = req.userData;
  try {
    const cart = await Cart.deleteMany({ user: id });
    if (cart) {
      res.status(200).json({ success: true });
    } else {
      return next(new HttpError("Failed to clear to cart", 422));
    }
  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
};
