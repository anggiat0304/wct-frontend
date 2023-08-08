import { combineReducers } from "redux";
import applicantReducer from "./applicantReducers";
import { downloadFileReducer } from "./fileReducers";
import authReducer from "./authReducers";


export default combineReducers({
    application : applicantReducer,
    downloadFile : downloadFileReducer,
    auth : authReducer
  });