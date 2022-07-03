import axios from "axios";
import {
  GET_SELECTED_ID,
  FOLLOW_LOADING,
  FOLLOW_SUCCESS,
  LOAD_FOLLOWED,
  STATION_LOADING,
  UNFOLLOW_FAIL,
  UNFOLLOW_SUCCESS,
  STATIONS_LOADED,
  STATIONS_LOADING_FAIL,
  CLEAR_SELECTED_ID,
  ADD_STATION_FAIL,
  ADD_STATION_SUCCESS,
} from "../types";
import { tokenConfig } from "./tokenConfig";

// Follow station

export const followStation =
  ({ id, idStation }) =>
  (dispatch, getState) => {
    dispatch({ type: FOLLOW_LOADING });

    const body = {
      id: id,
      idStation: idStation,
    };

    axios
      .post(`authentication/follow/`, body, tokenConfig(getState))
      .then((res) =>
        dispatch({
          type: FOLLOW_SUCCESS,
          payload: { data: res.data, idStation: idStation },
        })
      )
      .catch(
        (err) => console.log(err)
        // dispatch({ type: FOLLOW_FAIL, payload: err.response?.data })
      );
  };

// Unfollow a station

export const unFollowStation =
  ({ id, idStation }) =>
  (dispatch, getState) => {
    const body = {
      id: id,
      idStation: idStation,
    };

    dispatch({ type: FOLLOW_LOADING });

    axios
      .post(`authentication/unfollow/`, body, tokenConfig(getState))
      .then((res) =>
        dispatch({
          type: UNFOLLOW_SUCCESS,
          payload: { data: res.data, idStation: idStation },
        })
      )
      .catch((err) =>
        dispatch({ type: UNFOLLOW_FAIL, payload: err.response?.data })
      );
  };

// Loading initial follows

export const loadFollowed = () => (dispatch, getState) => {
  dispatch({
    type: LOAD_FOLLOWED,
    payload: getState().auth.user?.stationSuivie,
  });
};

// Adding a new station

export const addStation =
  ({ userId, identificator, name, longitude, latitude, number }) =>
  (dispatch, getState) => {
    const body = {
      userId,
      identificator,
      name,
      longitude,
      latitude,
      number,
    };
    dispatch({ type: STATION_LOADING });
    axios
      .post(`stations/register/`, body, tokenConfig(getState))
      .then((res) => dispatch({ type: ADD_STATION_SUCCESS, payload: res.data }))
      .catch((err) =>
        dispatch({ type: ADD_STATION_SUCCESS, payload: err.response })
      );
  };

// Modifying a new station

export const modifyStation =
  ({ idStation, identificator, name, longitude, latitude, number }) =>
  (dispatch, getState) => {
    const body = {
      idStation,
      identificator,
      name,
      longitude,
      latitude,
      number,
    };

    dispatch({ type: STATION_LOADING });
    axios
      .post(`stations/infos/${idStation}`, body, tokenConfig(getState))
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response));
  };

// Deleting a station

export const deletestation =
  ({ idStation, station }) =>
  (dispatch, getState) => {
    axios
      .delete(`stations/${idStation}`, station, tokenConfig(getState))
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response));
  };

// Getting selected id from stations suivies and mes stations

export const getSelectedId = (id) => {
  return {
    type: GET_SELECTED_ID,
    payload: id,
  };
};

// Clearing selected Id

export const clearSelectedId = () => {
  return { type: CLEAR_SELECTED_ID };
};

// Getting all registered stations

export const getAllStations = () => (dispatch, getState) => {
  dispatch({ type: STATION_LOADING });

  axios
    .get("/stations/", "", tokenConfig(getState))
    .then((res) => dispatch({ type: STATIONS_LOADED, payload: res.data }))
    .catch((error) => dispatch({ type: STATIONS_LOADING_FAIL }));
};
