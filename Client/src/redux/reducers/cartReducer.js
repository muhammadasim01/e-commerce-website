import * as actionTypes from "../constants/cartConstants";

export const cartReducer = (state = { cartItem: [] }, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_CART:
      const item = payload;
      const isExist = state.cartItem.find((x) => x._id === item._id);
      if (isExist) {
        return { ...state, cartItem: [...state.cartItem] };
      } else {
        return { ...state, cartItem: [...state.cartItem, item] };
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        cartItem: [...state.cartItem.filter((x) => x._id !== payload)],
      };
    case actionTypes.CART_RESET:
      return { cartItem: [] };

    default:
      return state;
  }
};
