import { data } from "../../components/utils/data/data";
import {
  GET_SEARCHED_VALUES,
  GET_SEARCH_VALUE_ON_TYPE,
  SEARCHED_VALUE,
} from "../types";

export const getSearchValueOnType = (value) => {
  return {
    type: GET_SEARCH_VALUE_ON_TYPE,
    payload: value ? value : null,
  };
};

export const getSearchedValue = (value, id) => {
  const values = { value: value, id: id };
  return {
    type: SEARCHED_VALUE,
    payload: values,
  };
};

export const getSearchedValues = (id) => {
  const searchedData = data.filter((value) => value.id === id);

  return {
    type: GET_SEARCHED_VALUES,
    payload: searchedData,
  };
};
