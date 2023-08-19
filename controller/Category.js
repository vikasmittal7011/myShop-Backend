const { validationResult } = require("express-validator");
const { Category } = require("../models/Category");

exports.createCategory = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }
  try {
    const category = new Category(req.body);
    const data = await category.save();
    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.fetchAllCategories = async (req, res) => {
  try {
    const category = await Category.find();
    res.set("X-Total-Count", totalDocs);
    res.status(200).json({ sucess: true, category });
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};
