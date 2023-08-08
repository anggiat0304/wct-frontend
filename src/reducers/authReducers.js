import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED
  } from "../actions/types";

  const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: null,
        };
      case LOGIN_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  