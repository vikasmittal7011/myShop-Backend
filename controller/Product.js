const { Product } = require("../models/Product");
const { validationResult } = require("express-validator");

exports.createProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }
  try {
    const product = new Product(req.body);
    const data = await product.save();
    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.fetchAllProducts = async (req, res) => {
  let query = Product.find({});
  let totalProductsQuery = Product.find({});

  if (req.query.category) {
    query = query.find({ category: req.query.category });
    totalProductsQuery = totalProductsQuery.find({
      category: req.query.category,
    });
  }
  if (req.query.brand) {
    query = query.find({ brand: req.query.brand });
    totalProductsQuery = totalProductsQuery.find({ brand: req.query.brand });
  }
  //TODO : How to get sort on discounted Price not on Actual price
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
    res.status(200).json({ sucess: true, products: docs });
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};

exports.fetchProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById({ _id: id });
    res.status(200).json({ success: true, product });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
