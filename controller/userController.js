const User = require("../models/user");

const addUser = async (req, res) => {
  const { Fname, Lname, Email, Password, Cpassword } = req.body;
  const user = await new User({ Fname, Lname, Email, Password, Cpassword });
  await user.save();
  console.log(req.body);
};

module.exports = { addUser };
