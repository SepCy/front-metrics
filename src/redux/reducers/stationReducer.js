import {
  FOLLOW_FAIL,
  FOLLOW_LOADING,
  FOLLOW_SUCCESS,
  UNFOLLOW_SUCCESS,
  UNFOLLOW_FAIL,
  LOAD_FOLLOWED,
  STATION_LOADING,
  ADD_STATION_SUCCESS,
  GET_SELECTED_ID,
  STATIONS_LOADED,
  CLEAR_SELECTED_ID,
  CLEAR_ERROR_MESSAGES,
  ADD_STATION_FAIL,
} from "../types";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  loading: false,
  successMessage: null,
  errorMessage: null,
  followedByUser: [],
  selectedId: null,
  stations: [],
};

const remove = (array, value) => {
  let index = array.indexOf(value);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CLEAR_ERROR_MESSAGES:
      return {
        ...state,
        successMessage: null,
        errorMessage: null,
      };

    case LOAD_FOLLOWED:
      return {
        ...state,
        followedByUser: action.payload,
      };
    case FOLLOW_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FOLLOW_SUCCESS:
      const pushing =
        state?.followedByUser.indexOf(action.payload.idStation) === -1 &&
        state?.followedByUser.push(action.payload.idStation);

      return {
        ...state,
        loading: false,
        successMessage: action.payload.data.message,
        errorMessage: null,
        followedByUser: [...state?.followedByUser, pushing],
      };
    case FOLLOW_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.message,
        successMessage: null,
      };
    case UNFOLLOW_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: action.payload.data.message,
        errorMessage: null,
        followedByUser: [
          remove(state?.followedByUser, action.payload.idStation),
        ],
      };

    case UNFOLLOW_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload?.message,
        successMessage: null,
      };

    case STATION_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_SELECTED_ID:
      return {
        ...state,
        selectedId: action.payload,
      };

    case STATIONS_LOADED:
      return {
        ...state,
        stations: action.payload,
        loading: false,
      };
    case CLEAR_SELECTED_ID:
      return {
        ...state,
        selectedId: null,
      };

    // CRUD stations
    case ADD_STATION_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
      };

    case ADD_STATION_FAIL:
      console.log(action.payload);
      return {
        ...state,
      };

    default:
      return state;
  }
}
