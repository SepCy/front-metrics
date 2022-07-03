import { SEARCH_VIEWPORT, SET_VIEWPORT } from "../types";

export const setViewport = (values) => {
  return {
    type: SET_VIEWPORT,
    payload: values,
  };
};

export const searchViewport = (values) => {
  console.log(values);
  return {
    type: SEARCH_VIEWPORT,
    payload: values,
  };
};
