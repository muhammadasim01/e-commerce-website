const express = require("express");
const router = express.Router();
const upload = require("../helpers/helper");
const Cart = require("../models/cart");

const {
  addProduct,
  showAllMobiles,
  showSamsungMobiles,
  showHuaweiMobile,
  showIphoneMobile,
  getProductDetails,
  showOthersMobile,
} = require("../controller/productController");

router.get("/", (req, res) => {
  res.send(" page");
});
router.get("/productdetail/:id", getProductDetails);

router.post("/add", upload.single("Photo"), addProduct);

router.get("/allmobiles", showAllMobiles);

router.get("/samsung", showSamsungMobiles);

router.get("/huawei", showHuaweiMobile);

router.get("/iphone", showIphoneMobile);

router.get("/others", showOthersMobile);

module.exports = router;
