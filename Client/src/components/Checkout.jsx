import React from "react";
import StipeCheckout from "react-stripe-checkout";
import { placeOrder } from "../redux/actions/orderActions";
import { useDispatch } from "react-redux";

const Checkout = ({ total }) => {
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, total));
  };
  return (
    <StipeCheckout
      token={tokenHandler}
      stripeKey="pk_test_51Kid5YEtOAaRk3yO6r0tzUW98fClNc7UcfzrpwVqvc34ECaFcizMawU6G2Wm42SkG7AuplKHcc2iV4UMlgsXIJko00nwWIvIdO"
      shippingAddress
      amount={total * 100}
      currency="PKR"
    >
      <button className="btn btn-primary">procees to Checkout</button>
    </StipeCheckout>
  );
};

export default Checkout;
