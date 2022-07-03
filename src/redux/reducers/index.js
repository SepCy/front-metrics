import { combineReducers } from "redux";
import authErrorReducer from "./authErrorReducer";
import authReducer from "./authReducers";
import mapReducer from "./mapReducer";
import searchReducer from "./searchReducer";
import stationReducer from "./stationReducer";
import subscribeReducer from "./subscribeReducer";

export default combineReducers({
  auth: authReducer,
  authError: authErrorReducer,
  subscription: subscribeReducer,
  station: stationReducer,
  search: searchReducer,
  map: mapReducer,
});
