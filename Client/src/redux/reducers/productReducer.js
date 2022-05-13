import * as actionType from "../constants/productConstants";

export const productAdd = (state = {}, { type, payload }) => {
  switch (type) {
    case actionType.PRODUCT_ADD_REQUEST:
      return { loading: true };
    case actionType.PRODUCT_ADD_SUCCESS:
      return { loading: false, success: true, response: payload };
    case actionType.PRODUCT_ADD_FAIL:
      return { loading: false, response: payload, success: false };

    default:
      return state;
  }
};

export const productDetail = (state = { response: {} }, { type, payload }) => {
  switch (type) {
    case actionType.PRODUCT_DETAIL_REQUEST:
      return { loading: true, reponse: {} };
    case actionType.PRODUCT_DETAIL_SUCCESS:
      return { loading: false, response: payload, success: true };
    case actionType.PRODUCT_ADD_FAIL:
      return { loading: false, success: false, error: payload };
    default:
      return state;
  }
};

export const getAllMobiles = (state = { response: [] }, { type, payload }) => {
  switch (type) {
    case actionType.GET_ALL_PRODUCT_REQUEST:
      return { loading: true, response: [] };
    case actionType.GET_ALL_PRODUCT_SUCCESS:
      return { loading: false, success: true, response: payload };
    case actionType.GET_ALL_PRODUCT_FAIL:
      return { loading: false, error: payload, success: false };

    default:
      return state;
  }
};

export const getSamsungMobiles = (
  state = { response: [] },
  { type, payload }
) => {
  switch (type) {
    case actionType.GET_SAMSUNG_PRODUCT_REQUEST:
      return { loading: true, response: [] };
    case actionType.GET_SAMSUNG_PRODUCT_SUCCESS:
      return { loading: false, success: true, response: payload };
    case actionType.GET_SAMSUNG_PRODUCT_FAIL:
      return { loading: false, error: payload, success: false };

    default:
      return state;
  }
};

export const getHuaweiMobiles = (
  state = { response: [] },
  { type, payload }
) => {
  switch (type) {
    case actionType.GET_HUAWEI_PRODUCT_REQUEST:
      return { loading: true, response: [] };
    case actionType.GET_HUAWEI_PRODUCT_SUCCESS:
      return { loading: false, success: true, response: payload };
    case actionType.GET_HUAWEI_PRODUCT_FAIL:
      return { loading: false, error: payload, success: false };

    default:
      return state;
  }
};

export const getOthersMobiles = (
  state = { response: [] },
  { type, payload }
) => {
  switch (type) {
    case actionType.GET_OTHERS_PRODUCT_REQUEST:
      return { loading: true, response: [] };
    case actionType.GET_OTHERS_PRODUCT_SUCCESS:
      return { loading: false, success: true, response: payload };
    case actionType.GET_OTHERS_PRODUCT_FAIL:
      return { loading: false, error: payload, success: false };

    default:
      return state;
  }
};

export const getIphoneMobiles = (
  state = { response: [] },
  { type, payload }
) => {
  switch (type) {
    case actionType.GET_IPHONE_PRODUCT_REQUEST:
      return { loading: true, response: [] };
    case actionType.GET_IPHONE_PRODUCT_SUCCESS:
      return { loading: false, success: true, response: payload };
    case actionType.GET_IPHONE_PRODUCT_FAIL:
      return { loading: false, error: payload, success: false };

    default:
      return state;
  }
};
