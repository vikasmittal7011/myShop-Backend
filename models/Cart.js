const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const CartSehema = mongoose.Schema(
  {
    item: {
      type: ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: { type: Number, required: true, default: 1 },
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    size: { type: mongoose.Schema.Types.Mixed },
    color: { type: mongoose.Schema.Types.Mixed },
  },
  { timestamps: true }
);

CartSehema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are included when converting to JSON
CartSehema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Cart = mongoose.model("Cart", CartSehema);
