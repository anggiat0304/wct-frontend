import { DOWNLOAD_FILE_FAILURE,DOWNLOAD_FILE_SUCCESS,DOWNLOAD_FILE_REQUEST } from "../actions/types";
const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const fileReducer = (state = initialState, action) => {
    switch (action.type) {
      case DOWNLOAD_FILE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DOWNLOAD_FILE_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: null,
        };
      case DOWNLOAD_FILE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default fileReducer;
  