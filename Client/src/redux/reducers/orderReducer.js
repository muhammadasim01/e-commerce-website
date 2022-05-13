import * as actionTypes from "../constants/orderConstants";

export const placeOrderReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.PLACE_ORDER_REQUEST:
      return { loading: true };
    case actionTypes.PLACE_ORDER_SUCCESS:
      return { loading: false, success: true, response: payload };
    case actionTypes.PLACE_ORDER_FAIL:
      return { loading: false, success: false, error: payload };

    default:
      return state;
  }
};
export const getAllOrderReducer = (
  state = { allOrder: [] },
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_ALL_ORDERS_REQUEST:
      return { loading: true, allOrder: [] };
    case actionTypes.GET_ALL_ORDERS_SUCCESS:
      return {
        loading: false,
        success: true,
        response: payload,
        allOrder: [...state.allOrder, payload],
      };
    case actionTypes.GET_ALL_ORDERS_FAIL:
      return { loading: false, success: false, error: payload };

    default:
      return state;
  }
};
export const orderDeliveredReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.ORDER_DELIVERED_REQUEST:
      return { loading: true };
    case actionTypes.ORDER_DELIVERED_SUCCESS:
      return { loading: false, success: true, response: payload };
    case actionTypes.ORDER_DELIVERED_FAIL:
      return { loading: false, success: false, error: payload };

    default:
      return state;
  }
};
