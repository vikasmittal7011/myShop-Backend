const { validationResult } = require("express-validator");
const { Brand } = require("../models/Brand");
const { capitalize } = require("../utils/capitalize");

exports.createBrand = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }
  try {
    const name = capitalize(req.body.name);
    const brand = new Brand({ name: name });
    const data = await brand.save();
    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.fetchAllBrands = async (req, res) => {
  try {
    const brand = await Brand.find();
    res.status(200).json({ success: true, brand });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
