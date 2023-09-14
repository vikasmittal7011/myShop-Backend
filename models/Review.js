const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ReviewSchema = mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: ObjectId,
      ref: "Product",
      required: true,
    },
    comment: { type: String, required: true },
    rating: { type: Number, required: true, min: [1], max: [5] },
  },
  { timestamps: true }
);

ReviewSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are included when converting to JSON
ReviewSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Review = mongoose.model("Review", ReviewSchema);
