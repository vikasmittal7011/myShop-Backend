const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const OrderSchema = mongoose.Schema({
  items: [
    {
      type: ObjectId,
      ref: "Cart",
      required: true,
    },
  ],
  totalItems: { type: Number, required: true, min: [1] },
  totalPrice: { type: Number, required: true, min: [1] },
  address: [{ type: Schema.Types.MixedF, required: true }],
});

OrderSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are included when converting to JSON
OrderSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Order = mongoose.model("Order", OrderSchema);
