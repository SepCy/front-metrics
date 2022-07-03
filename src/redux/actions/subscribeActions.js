import axios from "axios";
import {
  GET_SUBSCRIPTION_LOADING_OWNER,
  GET_SUBSCRIPTION_LOADING_PREMIUM,
  GET_SUBSCRIPTION_TYPE,
  SUBSCRIPTION_FAIL,
  SUBSCRIPTION_SUCCESS,
} from "../types";

import { tokenConfig } from "./tokenConfig";

export const getSubscribe =
  ({ id, subscription }) =>
  (dispatch, getState) => {
    if (subscription === "premium") {
      dispatch({ type: GET_SUBSCRIPTION_LOADING_PREMIUM });
    } else {
      dispatch({ type: GET_SUBSCRIPTION_LOADING_OWNER });
    }
    axios
      .put(
        `/authentication/subscription/${id}/${subscription}`,
        "",
        tokenConfig(getState)
      )
      .then((res) => dispatch({ type: SUBSCRIPTION_SUCCESS, payload: res }))
      .catch((err) =>
        dispatch({ type: SUBSCRIPTION_FAIL, payload: err.response })
      );
  };

export const getSubscribtionType = (type) => {
  return {
    type: GET_SUBSCRIPTION_TYPE,
    payload: type,
  };
};
