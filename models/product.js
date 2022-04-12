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
const Product = mongoose.model("product", productSchema);
module.exports = Product;
