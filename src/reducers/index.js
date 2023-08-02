import { combineReducers } from "redux";
import applicantReducer from "./applicantReducers";
export default combineReducers({
    application : applicantReducer
  });