const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const adminTokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "AdminUser",
  },
  token: String,
  expiresIn: {
    type: Date,
    default: Date.now() + 3600000,
  },
});
const AdminToken = mongoose.model("AdminToken", adminTokenSchema);
module.exports = AdminToken;
