const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  token: String,
  expiresIn: {
    type: Date,
    default: Date.now() + 3600000,
  },
});
const Token = mongoose.model("Token", tokenSchema);
module.exports = Token;
