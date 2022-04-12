const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  BrandName: {
    type: String,
    require: true,
  },
  ModelName: {
    type: String,
    require: true,
  },
  Price: {
    type: String,
    require: true,
  },
  Photo: String,
});
const Cart = mongoose.model("cart", productSchema);
module.exports = Cart;
