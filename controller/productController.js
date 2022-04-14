const product = require("../models/product");

const addUser = async (req, res) => {
  if (req.file) {
    res.status(200).send("added");
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
  await p1.save();
};

const showAllMobiles = async (req, res) => {
  const products = await product.find();
  res.send(products);
};

const showSamsungMobiles = async (req, res) => {
  const products = await product.find({
    BrandName: "Samsung",
  });
  res.send(products);
};

const showHuaweiMobile = async (req, res) => {
  const products = await product.find({ BrandName: "huawei" });
  res.send(products);
};

const showIphoneMobile = async (req, res) => {
  const products = await product.find({
    BrandName: "iphone",
  });
  res.send(products);
};

module.exports = {
  addUser,
  showAllMobiles,
  showSamsungMobiles,
  showHuaweiMobile,
  showIphoneMobile,
};
