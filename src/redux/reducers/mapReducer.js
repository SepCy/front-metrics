import { SEARCH_VIEWPORT, SET_VIEWPORT } from "../types";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  latitude: 5.79142,
  longitude: 12.25444,
  zoom: 5.5,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_VIEWPORT:
      return {
        ...state,
        ...action.payload,
      };

    case SEARCH_VIEWPORT:
      return {
        ...state,
        // longitude: action.payload.longitude,
        // latitude: action.payload.latitude,
      };
    default:
      return state;
  }
}
