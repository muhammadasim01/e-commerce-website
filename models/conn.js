const mongoose = require("mongoose");
const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://asim:1234@cluster0.3jjse.mongodb.net/ecommerce?retryWrites=true&w=majority";
mongoose
  .connect(uri)
  .then(() => {
    console.log("connected to the database successfully");
  })
  .catch(() => {
    console.log("not connected to the database");
  });
module.exports = mongoose;
