const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Order = require("../models/Order");
const User = require("../models/user");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");

const orderCreator = async (req, res) => {
  const { token, cartItem, total, jwtToken } = req.body;
  const userinfo = jwt.verify(jwtToken, process.env.SECRET_KEY);
  if (userinfo) {
    const user = await User.findOne({ _id: userinfo.id });
    if (user) {
      const idempontencyKey = uuid.v4();

      return stripe.customers
        .create({ email: token.email, source: token.id })
        .then(
          (customer) => {
            stripe.charges.create({
              amount: total * 100,
              currency: "pkr",
              customer: customer.id,
            });
          },
          { idempontencyKey }
        )
        .then(async () => {
          const order = await new Order({
            name: user.Fname,
            email: user.Email,
            orderItems: cartItem,
            orderAmount: total,
            shippingAdress: token.card.address_line1,
            isDelivered: false,
            isPaid: true,
          });
          const isSave = await order.save();
          if (isSave) console.log("saved to the database successfully");
        })
        .catch((error) => {
          console.log("error  " + error.message);
        });
    } else {
      res.send("unautherized user");
      console.log("user not matching with this token");
    }
  } else {
    res.send("unautherized user");
    console.log("token is not matcahing");
  }
};

const getAllOrders = async (req, res) => {
  try {
    const allOrders = await Order.find({});
    res.send(allOrders);
  } catch (error) {
    res.send(error.message);
  }
};
const orderDeliverd = async (req, res) => {
  const { id } = req.body.params;
  try {
    const order = await Order.findOne({ _id: id });
    order.isDelivered = true;
    const updatedOrder = await order.save();
    res.send(updatedOrder);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { orderCreator, getAllOrders, orderDeliverd };
