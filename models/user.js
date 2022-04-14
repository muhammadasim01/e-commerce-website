const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {
    Fname: {
      type: String,
      required: true,
    },
    Lname: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Cpassword: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  this.save();
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
