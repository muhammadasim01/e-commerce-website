require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const ProductRoutes = require("./routes/productRoutes");
const UserRoutes = require("./routes/userRoutes");
require("./models/conn");

const app = express();

let port = process.env.PORT || 8000;

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "./Client/build")));
} else {
  app.get("/", (req, res) => {
    res.send("this is root from development server");
  });
}

app.use("/uploads", express.static("uploads"));
app.use(ProductRoutes);
app.use(UserRoutes);
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`listening to the port ${port}`);
});
