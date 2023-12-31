const { Product } = require("../models/Product");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");

exports.createProduct = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return next(new HttpError(errorMessages, 422));
  }
  let selectedImages = [];
  let newProduct = { ...req.body };
  newProduct.thumbnail = req.files.thumbnail[0].path;
  if (req.files.image1) {
    selectedImages.push(req.files.image1[0].path);
  }
  if (req.files.image2) {
    selectedImages.push(req.files.image2[0].path);
  }
  if (req.files.image3) {
    selectedImages.push(req.files.image3[0].path);
  }
  if (req.files.image4) {
    selectedImages.push(req.files.image4[0].path);
  }
  newProduct.images = selectedImages;
  newProduct.colors = JSON.parse(req.body.colors);
  newProduct.sizes = JSON.parse(req.body.sizes);
  newProduct.discountPrice = Math.round(
    newProduct?.price * (1 - newProduct?.discountPercentage / 100)
  );
  try {
    const product = new Product(newProduct);
    const data = await product.save();
    res.status(200).json({ success: true, data });
  } catch (err) {
    return next(new HttpError(err, 500));
  }
};

exports.fetchAllProducts = async (req, res) => {
  const admin = req.query.admin;

  let condition = {};
  if (admin === "false") {
    condition.deleted = { $ne: true };
  }

  let query = Product.find(condition);
  let totalProductsQuery = Product.find(condition);

  if (req.query.search) {
    query = query.find({ title: { $regex: req.query.search, $options: "i" } });
    totalProductsQuery = totalProductsQuery.find({
      title: { $regex: req.query.search, $options: "i" },
    });
  }
  if (req.query.category) {
    query = query.find({ category: { $in: req.query.category.split(",") } });
    totalProductsQuery = totalProductsQuery.find({
      category: { $in: req.query.category.split(",") },
    });
  }
  if (req.query.brand) {
    query = query.find({ brand: { $in: req.query.brand.split(",") } });
    totalProductsQuery = totalProductsQuery.find({
      brand: { $in: req.query.brand.split(",") },
    });
  }
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

exports.updateProduct = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return next(new HttpError(errorMessages, 401));
  }
  const { id } = req.params;
  try {
    const updatedProduct = { ...req.body };
    updatedProduct.discountPrice = Math.round(
      updatedProduct?.price * (1 - updatedProduct?.discountPercentage / 100)
    );
    const product = await Product.findByIdAndUpdate(
      { _id: id },
      updatedProduct,
      {
        new: true,
      }
    );
    res.status(200).json({ success: true, product });
  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
};

exports.fetchRelatedProduct = async (req, res, next) => {
  const pid = req.params.id;
  const limit = req.query.limit || 10;
  try {
    let product = await Product.findOne({ _id: pid });

    if (!product) {
      return next(new HttpError("Product not found!", 404));
    }

    let relatedProduct = await Product.find({
      _id: { $ne: product },
      category: product.category,
    }).limit(limit);

    if (!relatedProduct) {
      return next(new HttpError("Product not found!", 404));
    }

    res.json({ success: true, product: relatedProduct });
  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
};
