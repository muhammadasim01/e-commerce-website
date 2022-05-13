const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    orderItems: [],
    orderAmount: { type: Number, required: true },
    shippingAdress: { type: String, required: true },
    isDelivered: { type: Boolean, required: true },
    isPaid: { type: Boolean, required: true },
  },
  { timestamps: true }
);
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
