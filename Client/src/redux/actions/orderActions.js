import * as actionTypes from "../constants/orderConstants";
import axios from "axios";

export const placeOrder = (token, total) => async (dispatch, getstate) => {
  try {
    dispatch({ type: actionTypes.PLACE_ORDER_REQUEST });
    const cartItem = getstate().CartReducer.cartItem;
    const jwtToken = localStorage.getItem("userinfo");
    const response = await axios.post("http://localhost:8000/placeorder", {
      token,
      cartItem,
      total,
      jwtToken,
    });
    const res = await response.data;
    dispatch({ type: actionTypes.PLACE_ORDER_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: actionTypes.PLACE_ORDER_FAIL, payload: error.message });
  }
};

export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_ALL_ORDERS_REQUEST });
    const res = await axios.get("http://localhost:8000/allorders");
    const response = await res.data;
    dispatch({ type: actionTypes.GET_ALL_ORDERS_SUCCESS, payload: response });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: actionTypes.GET_ALL_ORDERS_FAIL, payload: error.message });
  }
};
export const orderDelivered = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ORDER_DELIVERED_REQUEST });
    const res = await axios.put(`http://localhost:8000/orderdelivered/${id}`);
    const response = await res.data;
    dispatch({ type: actionTypes.ORDER_DELIVERED_SUCCESS, payload: response });
  } catch (error) {
    dispatch({
      type: actionTypes.ORDER_DELIVERED_FAIL,
      payload: error.message,
    });
  }
};
