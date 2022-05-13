import * as userActions from "../constants/userconstants";

export const UserRegistration = (state = {}, { type, payload }) => {
  switch (type) {
    case userActions.USER_REGISTRATION_REQUEST:
      return { loading: true };
    case userActions.USER_REGISTRATION_SUCCESS:
      return { loading: false, response: payload };
    case userActions.USER_REGISTRATION_FAIL:
      return { loading: false, response: payload };

    default:
      return state;
  }
};

export const UserLogin = (state = {}, { type, payload }) => {
  switch (type) {
    case userActions.USER_LOGIN_REQUEST:
      return { loading: true };
    case userActions.USER_LOGIN_SUCCESS:
      return { loading: false, token: payload.token, success: payload.state };
    case userActions.USER_LOGIN_FAIL:
      return { loading: false, response: payload };
    case userActions.USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const UserDetails = (state = { response: [] }, { type, payload }) => {
  switch (type) {
    case userActions.USER_DETAILS_REQUEST:
      return { loading: true, response: [] };
    case userActions.USER_DETAILS_SUCCESS:
      return { loading: false, response: payload };
    case userActions.USER_DETAILS_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};
