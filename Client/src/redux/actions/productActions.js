import * as productAction from "../constants/productConstants";
import axios from "axios";

export const addProductAction = (obj) => async (dispatch) => {
  try {
    dispatch({ type: productAction.PRODUCT_ADD_REQUEST });
    const res = await axios.post("http://localhost:8000/add", obj);
    const response = await res.data;
    dispatch({ type: productAction.PRODUCT_ADD_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: productAction.PRODUCT_ADD_FAIL, payload: error.message });
  }
};

export const getProductDetailAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: productAction.PRODUCT_DETAIL_REQUEST });
    const res = await axios.get(`http://localhost:8000/productdetail/${id}`);
    const response = await res.data;
    dispatch({ type: productAction.PRODUCT_DETAIL_SUCCESS, payload: response });
  } catch (error) {
    dispatch({
      type: productAction.PRODUCT_DETAIL_FAIL,
      payload: error.message,
    });
  }
};

export const getAllMobilesAction = () => async (dispatch) => {
  try {
    dispatch({ type: productAction.GET_ALL_PRODUCT_REQUEST });

    const res = await axios.get("http://localhost:8000/allmobiles");
    const response = await res.data;
    dispatch({
      type: productAction.GET_ALL_PRODUCT_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: productAction.GET_ALL_PRODUCT_FAIL,
      payload: error.message,
    });
  }
};

export const getSamsungMobilesAction = () => async (dispatch) => {
  try {
    dispatch({ type: productAction.GET_SAMSUNG_PRODUCT_REQUEST });

    const res = await axios.get("http://localhost:8000/samsung");
    const response = await res.data;
    dispatch({
      type: productAction.GET_SAMSUNG_PRODUCT_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: productAction.GET_SAMSUNG_PRODUCT_FAIL,
      payload: error.message,
    });
  }
};

export const getHuaweiMobilesAction = () => async (dispatch) => {
  try {
    dispatch({ type: productAction.GET_HUAWEI_PRODUCT_REQUEST });
    const res = await axios.get("http://localhost:8000/huawei");
    const response = await res.data;
    dispatch({
      type: productAction.GET_HUAWEI_PRODUCT_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: productAction.GET_HUAWEI_PRODUCT_FAIL,
      payload: error.message,
    });
  }
};

export const getIphoneMobilesAction = () => async (dispatch) => {
  try {
    dispatch({ type: productAction.GET_IPHONE_PRODUCT_REQUEST });

    const res = await axios.get("http://localhost:8000/iphone");
    const response = await res.data;
    dispatch({
      type: productAction.GET_IPHONE_PRODUCT_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: productAction.GET_IPHONE_PRODUCT_FAIL,
      payload: error.message,
    });
  }
};

export const getOthersMobilesAction = () => async (dispatch) => {
  try {
    dispatch({ type: productAction.GET_OTHERS_PRODUCT_REQUEST });

    const res = await axios.get("http://localhost:8000/others");
    const response = await res.data;
    dispatch({
      type: productAction.GET_OTHERS_PRODUCT_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: productAction.GET_OTHERS_PRODUCT_FAIL,
      payload: error.message,
    });
  }
};
