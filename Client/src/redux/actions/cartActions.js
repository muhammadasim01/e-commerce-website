import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id) => async (dispatch, getstate) => {
  const res = await axios.get(`http://localhost:8000/productdetail/${id}`);
  const response = await res.data;
  dispatch({ type: actionTypes.ADD_TO_CART, payload: response });
  localStorage.setItem("cart", JSON.stringify(getstate().CartReducer.cartItem));
};

export const removeFromCart = (id) => (dispatch, getstate) => {
  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
  localStorage.setItem("cart", JSON.stringify(getstate().CartReducer.cartItem));
};

export const cartReset = () => (dispatch, getstate) => {
  dispatch({ type: actionTypes.CART_RESET });
  localStorage.setItem("cart", JSON.stringify(getstate().CartReducer.cartItem));
};
