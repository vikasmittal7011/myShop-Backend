const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: [0], max: [10000] },
  discountPercentage: { type: Number, required: true, min: [0], max: [90] },
  rating: { type: Number, required: true, min: [1], max: [5], default: 0 },
  stock: { type: Number, required: true, min: [1] },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [{ type: String, required: true }],
  deleted: { type: Boolean, default: false },
});

exports.Product = mongoose.model("Product", ProductSchema);
