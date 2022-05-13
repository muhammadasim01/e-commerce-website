const product = require("../models/product");
const mongoose = require("mongoose");

const addProduct = async (req, res) => {
  if (req.file) {
    res.status(200);
  } else {
    res.status(404).send("not added");
  }
  const BrandName = req.body.BrandName;
  const ModelName = req.body.ModelName;
  const Price = req.body.Price;
  const Photo = req.file.filename;
  const p1 = new product({
    BrandName,
    ModelName,
    Price,
    Photo,
  });
  const productadd = await p1.save();
  if (productadd) res.send("product added successfully");
};

const showAllMobiles = async (req, res) => {
  const products = await product.find();
  res.send(products);
};

const showSamsungMobiles = async (req, res) => {
  const products = await product.find({
    BrandName: { $in: ["Samsung", "samsung"] },
  });
  res.send(products);
};

const showHuaweiMobile = async (req, res) => {
  const products = await product.find({
    BrandName: { $in: ["Huawei", "huawei"] },
  });
  res.send(products);
};

const showIphoneMobile = async (req, res) => {
  const products = await product.find({
    BrandName: { $in: ["Iphone", "iphone", "I phone", "i phone"] },
  });
  res.send(products);
};

const showOthersMobile = async (req, res) => {
  const products = await product.find({
    BrandName: {
      $nin: [
        "Huawei",
        "huawei",
        "Iphone",
        "iphone",
        "I phone",
        "i phone",
        "Samsung",
        "samsung",
      ],
    },
  });
  res.send(products);
};

const getProductDetails = async (req, res) => {
  const { id } = req.params;
  const singleProduct = await product.findById({ _id: id });
  res.send(singleProduct);
};

module.exports = {
  addProduct,
  showAllMobiles,
  showSamsungMobiles,
  showHuaweiMobile,
  showIphoneMobile,
  getProductDetails,
  showOthersMobile,
};
