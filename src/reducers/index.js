import { combineReducers } from "redux";
import applicantReducer from "./applicantReducers";
import { downloadFileReducer } from "./fileReducers";

export default combineReducers({
    application : applicantReducer,
    downloadFile : downloadFileReducer
  });