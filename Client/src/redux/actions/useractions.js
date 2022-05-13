import * as userActions from "../constants/userconstants";

import axios from "axios";

export const UserLogin =
  ({ Email, Password }) =>
  async (dispatch) => {
    dispatch({ type: userActions.USER_LOGIN_REQUEST });
    try {
      const response = await axios.post("http://localhost:8000/login", {
        Email,
        Password,
      });
      const res = await response.data;
      dispatch({ type: userActions.USER_LOGIN_SUCCESS, payload: res });
      if (res.token !== undefined) {
        localStorage.setItem("userinfo", res.token);
      }
    } catch (error) {
      dispatch({ type: userActions.USER_LOGIN_FAIL, payload: error.message });
    }
  };

export const UserLogout = () => (dispatch) => {
  localStorage.removeItem("userinfo");
  dispatch({ type: userActions.USER_LOGOUT });
};

export const UserRegistration = (obj) => async (dispatch) => {
  dispatch({ type: userActions.USER_REGISTRATION_REQUEST });
  try {
    const res = await axios.post("http://localhost:8000/registeruser", obj);
    const response = await res.data;
    dispatch({
      type: userActions.USER_REGISTRATION_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: userActions.USER_REGISTRATION_FAIL,
      payload: error.message,
    });
  }
};

export const UserDetails = () => async (dispatch) => {
  dispatch({ type: userActions.USER_DETAILS_REQUEST });
  try {
    const res = await axios.get("http://localhost:8000/allusers");
    const response = await res.data;
    dispatch({ type: userActions.USER_DETAILS_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: userActions.USER_DETAILS_FAIL, payload: error.message });
  }
};
