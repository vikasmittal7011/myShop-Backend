const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProductSchema = mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: [0], max: [10000] },
    discountPercentage: { type: Number, required: true, min: [0], max: [90] },
    averageRating: { type: Number, default: 0 },
    totalRating: [
      {
        type: ObjectId,
        ref: "Review",
        required: true,
      },
    ],
    stock: { type: Number, required: true, min: [1] },
    discountPrice: { type: Number, required: true },
    colors: [{ type: mongoose.Schema.Types.Mixed }],
    sizes: [{ type: mongoose.Schema.Types.Mixed }],
    brand: {
      type: ObjectId,
      ref: "Brand",
      required: true,
    },
    category: {
      type: ObjectId,
      ref: "Categories",
      required: true,
    },
    thumbnail: { type: String, required: true },
    images: [{ type: String, required: true }],
    highlights: [{ type: String }],
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

ProductSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are included when converting to JSON
ProductSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Product = mongoose.model("Product", ProductSchema);
