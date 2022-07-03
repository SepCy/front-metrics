/* eslint-disable import/no-anonymous-default-export */
import {
  GET_SUBSCRIPTION,
  GET_SUBSCRIPTION_LOADING_OWNER,
  GET_SUBSCRIPTION_LOADING_PREMIUM,
  GET_SUBSCRIPTION_TYPE,
  LOADING,
  SUBSCRIPTION_FAIL,
  SUBSCRIPTION_SUCCESS,
} from "../types";

const initialState = {
  typeOfSubscription: null,
  id: null,
  type: null,
  loadingPremium: false,
  loadingOwner: false,
  message: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SUBSCRIPTION:
      return {
        ...state,
        typeOfSubscription: action.payload.subscription,
        id: action.payload.id,
        loadingPremium: false,
        loadingOwner: false,
      };

    case GET_SUBSCRIPTION_TYPE:
      return {
        ...state,
        type: action.payload,
        loadingPremium: false,
      };

    case SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        loadingOwner: false,
      };

    case SUBSCRIPTION_FAIL:
      return {
        ...state,
        message: action.payload.message,
        loading: false,
      };

    case GET_SUBSCRIPTION_LOADING_OWNER:
      return {
        ...state,
        loadingOwner: true,
      };
    case GET_SUBSCRIPTION_LOADING_PREMIUM:
      return {
        ...state,
        loadingPremium: true,
      };

    default:
      return state;
  }
}
