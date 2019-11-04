/**
 * Application Reducer Object
 */
import { combineReducers } from "redux";
import auth from "../modules/login/reducer/login";
import home from "../modules/home/reducer/home";

const AppReducer = combineReducers({
  auth,
  home
});

export default AppReducer;
