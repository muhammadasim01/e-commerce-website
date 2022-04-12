const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
mongoose
  .connect(uri)
  .then(() => {
    console.log("connected to the database successfully");
  })
  .catch(() => {
    console.log("not connected to the database");
  });
module.exports = mongoose;
