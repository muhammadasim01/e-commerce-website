const AdminUser = require("../models/adminUser");
const bcrypt = require("bcryptjs");
const AdminToken = require("../models/adminToken");
const crypto = require("crypto");
const MailSend = require("../utils/mailsendder");

const addAdminUser = async (req, res) => {
  const { Fname, Lname, Email, Password, Cpassword } = req.body;
  if (!Fname || !Lname || !Email || !Password || !Cpassword) {
    res.status(401).send("please fill all the fields");
  }
  const isExist = await AdminUser.findOne({ Email });
  if (isExist) {
    res.send("user already exist");
  } else {
    if (Password !== Cpassword) {
      res.send("password do not match");
    } else {
      const user = await new AdminUser({
        Fname,
        Lname,
        Email,
        Password,
        Cpassword,
      });
      const registeredUser = await user.save();
      res.status(201).send("user registered successfully");
    }
  }
};
const adminLogin = async (req, res) => {
  const { Email, Password } = req.body;
  const isExist = await AdminUser.findOne({ Email });
  if (isExist) {
    const isMatch = await bcrypt.compare(Password, isExist.Password);
    if (isMatch) {
      const token = await isExist.generateToken();
      if (token) res.send({ token: token, state: true });
    } else {
      res.send("invalid credentials");
    }
  } else {
    res.send("invalid credentials");
  }
};

const forgotPassword = async (req, res) => {
  const userExist = await AdminUser.findOne({ Email: req.body.Email });
  if (!userExist) return res.send("user not exist");
  const newToken = await new AdminToken({
    userId: userExist._id,
    token: crypto.randomBytes(32).toString("hex"),
  });
  const token = await newToken.save();
  const link = `http://localhost:3000/#/admin/create/${token.userId}/${token.token}`;
  MailSend(userExist.Email, link);
};

const adminResetPassword = async (req, res) => {
  const { id, token } = req.params;
  const { Password, Cpassword } = req.body;
  const getUser = await AdminUser.findOne({ _id: id });
  const GETuser = await AdminToken.findOne({ userId: id, token: token });
  if (!getUser) return res.send("user not exist or token expired");
  if (Password != Cpassword) return res.send("password do not match");
  getUser.Password = Password;
  getUser.Cpassword = Cpassword;
  await getUser.save();
  res.send("password updated successfully");
  await GETuser.delete();
};

module.exports = {
  addAdminUser,
  adminLogin,
  forgotPassword,
  adminResetPassword,
};
