const env = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const upload = require("./helpers/helper");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const product = require("./models/product");
const Cart = require("./models/cart");
const User = require("./models/user");
require("./models/conn");

const app = express();
if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "./Client/build")));
  app.get("*", (req, res) => {
    res.sendFile("./Client/build/index.html");
  });
} else {
  app.get("/", (req, res) => {
    res.send("this is root from development serve");
  });
}
app.use("/uploads", express.static("uploads"));
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(" page");
});
app.post("/add", upload.single("Photo"), async (req, res) => {
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
});
app.get("/allmobiles", async (req, res) => {
  const products = await product.find();
  res.send(products);
});

app.get("/samsung", async (req, res) => {
  const products = await product.find({
    BrandName: "Samsung",
  });
  res.send(products);
});
app.get("/huawei", async (req, res) => {
  const products = await product.find({ BrandName: "huawei" });
  res.send(products);
});
app.get("/iphone", async (req, res) => {
  const products = await product.find({
    BrandName: "iphone",
  });
  res.send(products);
});
app.get("/getcart", async (req, res) => {
  const products = await Cart.find();
  res.send(products);
});
app.post("/cart", async (req, res) => {
  const p2 = await product.findById({ _id: req.body.id });
  const { _id, BrandName, ModelName, Price, Photo } = p2;
  const c1 = await new Cart({ _id, BrandName, ModelName, Price, Photo });
  await c1.save();
  console.log(c1);
});
app.post("registerdata", async (req, res) => {
  const { Fname, Lname, Email, Password, Cpassword } = req.body;
  const user = await new User({ Fname, Lname, Email, Password, Cpassword });
  await user.save();
  console.log(req.body);
});

app.listen(process.env.PORT, () => {
  console.log(`listening to the port ${process.env.PORT}`);
});
