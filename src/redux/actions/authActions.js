import axios from "axios";
import {
  CLEAR_ERRORS,
  LOADING,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  USER_LOADING,
} from "../types";
import { tokenConfig } from "./tokenConfig";
import { getErrors } from "./authErrorActions";
//Check token & load user

export const loadUser = () => (dispatch, getState) => {
  // User loading

  dispatch({ type: USER_LOADING });

  //Fetching the user

  axios
    .post("/authentication/validtoken", {}, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({ type: LOGIN_FAIL });
    });
};

// Login User
export const login =
  ({ email, password }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request Body
    //const strategy = "local";
    const body = JSON.stringify({ email, password });

    dispatch({ type: USER_LOADING });

    axios
      .post("/authentication/signin", body, config)
      .then(
        (res) =>
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
          }),
        dispatch({ type: CLEAR_ERRORS })
      )
      .catch((err) => {
        dispatch(
          getErrors(
            err.response.data.message,
            err.response.status,
            "LOGIN_FAIL"
          )
        );
        dispatch({ type: LOGIN_FAIL });
      });
  };

// Logout user

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

// Register SuperUser

export const registerUser =
  ({ email, password, firstName, lastName, number }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request Body
    const body = JSON.stringify({
      email,
      password,
      firstName,
      lastName,
      number,
    });
    // Loading spinner
    dispatch({ type: USER_LOADING });

    axios
      .post("/authentication/signup", body, config)
      .then(
        (res) =>
          dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
          }),
        dispatch({ type: CLEAR_ERRORS })
      )
      .catch((err) => {
        dispatch(
          getErrors(
            err.response.data.message,
            err.response.status,
            "REGISTER_FAIL"
          )
        );
        dispatch({ type: REGISTER_FAIL });
      });
  };
