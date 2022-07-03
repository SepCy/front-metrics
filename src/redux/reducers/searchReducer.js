import {
  GET_SEARCHED_VALUES,
  GET_SEARCH_VALUE_ON_TYPE,
  SEARCHED_VALUE,
  SEARCH_LOADING,
} from "../types";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  loading: false,
  searchValueOnType: "",
  searchedValue: null,
  searchValueId: null,
  toggle: false,
  searchedValues: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_SEARCH_VALUE_ON_TYPE:
      return {
        ...state,
        searchValueOnType: action.payload,
        loading: false,
        toggle: false,
      };
    case GET_SEARCHED_VALUES: {
      return {
        ...state,
        searchedValues: action.payload,
        loading: false,
        toggle: true,
      };
    }

    case SEARCHED_VALUE:
      return {
        ...state,
        searchedValue: action.payload.value,
        searchValueId: action.payload.id,
        toggle: true,
        loading: false,
      };
    default:
      return state;
  }
}
