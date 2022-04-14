const express = require("express");
const router = express.Router();
const upload = require("../helpers/helper");
const Cart = require("../models/cart");

const {
  addUser,
  showAllMobiles,
  showSamsungMobiles,
  showHuaweiMobile,
  showIphoneMobile,
} = require("../controller/productController");

router.get("/", (req, res) => {
  res.send(" page");
});

router.post("/add", upload.single("Photo"), addUser);

router.get("/allmobiles", showAllMobiles);

router.get("/samsung", showSamsungMobiles);

router.get("/huawei", showHuaweiMobile);

router.get("/iphone", showIphoneMobile);

router.get("/getcart", async (req, res) => {
  const products = await Cart.find();
  res.send(products);
});
router.post("/cart", async (req, res) => {
  const p2 = await product.findById({ _id: req.body.id });
  const { _id, BrandName, ModelName, Price, Photo } = p2;
  const c1 = await new Cart({ _id, BrandName, ModelName, Price, Photo });
  await c1.save();
});

module.exports = router;
