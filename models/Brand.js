const mongoose = require("mongoose");

const BrandSehema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

BrandSehema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are included when converting to JSON
BrandSehema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Brand = mongoose.model("Brand", BrandSehema);
