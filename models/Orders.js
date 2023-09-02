const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const OrderSchema = mongoose.Schema(
  {
    items: [{ type: mongoose.Schema.Types.Mixed, required: true }],
    totalItems: { type: Number, required: true, min: [1] },
    totalPrice: { type: Number, required: true, min: [1] },
    address: { type: mongoose.Schema.Types.Mixed, required: true },
    paymentMethod: { type: String, required: true },
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "Pending",
      enum: ["Pending", "Dispatch", "Delivered", "Cancel"],
    },
    paymentStatus: {
      type: String,
      required: true,
      default: "Pending",
      enum: ["Pending", "Receive"],
    },
  },
  { timestamps: true }
);

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
