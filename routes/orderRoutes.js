const router = require("express").Router();
const {
  orderCreator,
  getAllOrders,
  orderDeliverd,
} = require("../controller/orderController");

router.post("/placeorder", orderCreator);

router.get("/allorders", getAllOrders);

router.put("/orderdelivered/:id", orderDeliverd);

module.exports = router;
