import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADING,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT_SUCCESS,
} from "../types";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuthenticated: false,
  loading: false,
  stations: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case USER_LOADED:
      return {
        ...state,
        token: action.payload.token,
        loading: false,
        isAuthenticated: true,
        user: action.payload.user,
        stations: action.payload?.stations,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        loading: false,
        isAuthenticated: true,
        user: action.payload.user,
      };

    case REGISTER_FAIL:
    case LOGOUT_SUCCESS:
    case LOGIN_FAIL:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
}
