import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  UserDetails,
  UserLogin,
  UserRegistration,
} from "./reducers/userReducer";
import {
  productAdd,
  productDetail,
  getAllMobiles,
  getSamsungMobiles,
  getHuaweiMobiles,
  getOthersMobiles,
  getIphoneMobiles,
} from "./reducers/productReducer";
import { cartReducer as CartReducer } from "./reducers/cartReducer";
import {
  placeOrderReducer,
  getAllOrderReducer,
  orderDeliveredReducer,
} from "./reducers/orderReducer";

const stateFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initial_state = {
  CartReducer: {
    cartItem: stateFromLocalStorage,
  },
};

const store = createStore(
  combineReducers({
    UserDetailsReducer: UserDetails,
    UserLoginReducer: UserLogin,
    UserRegistrationReducer: UserRegistration,
    productAddReducer: productAdd,
    getAllReducer: getAllMobiles,
    getSamsungReducer: getSamsungMobiles,
    getHuaweiReducer: getHuaweiMobiles,
    getOthersReducer: getOthersMobiles,
    getIphoneReducer: getIphoneMobiles,
    CartReducer,
    productDetail,
    placeOrderReducer,
    getAllOrderReducer,
    orderDeliveredReducer,
  }),
  initial_state,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
