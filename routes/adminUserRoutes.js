const router = require("express").Router();
const {
  addAdminUser,
  adminLogin,
  forgotPassword,
  adminResetPassword,
} = require("../controller/adminUserController");

router.post("/adminRegister", addAdminUser);
router.post("/adminLogin", adminLogin);
router.post("/forgotadmin", forgotPassword);
router.post("/admin/create/:id/:token", adminResetPassword);
module.exports = router;
