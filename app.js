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

app.use("/uploads", express.static("uploads"));
if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "./Client/build")));
}

app.use(cors());
app.use(ProductRoutes);
app.use(UserRoutes);
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`listening to the port ${port}`);
});
