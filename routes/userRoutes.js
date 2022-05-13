const express = require("express");
const router = express.Router();
const {
  addUser,
  loginUser,
  forgotPassword,
  resetPassword,
  getAllUsers,
} = require("../controller/userController");

router.get("/allusers", getAllUsers);
router.post("/registeruser", addUser);
router.post("/login", loginUser);
router.post("/forgot", forgotPassword);
router.post("/create/:id/:token", resetPassword);

module.exports = router;
