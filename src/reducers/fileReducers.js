import {
  DOWNLOAD_FILE_FAILURE
  , DOWNLOAD_FILE_SUCCESS
  , DOWNLOAD_FILE_REQUEST
  , DOWNLOAD_BULK_FILE_REQUEST
  , DOWNLOAD_BULK_FILE_SUCCESS
  , DOWNLOAD_BULK_FILE_FAILURE
} from "../actions/types";
const initialState = {
  data: [],
  loading: false,
  error: null,
};

const downloadFileReducer = (state = initialState, action) => {
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

const downloadBulkFile = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_BULK_FILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DOWNLOAD_BULK_FILE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case DOWNLOAD_BULK_FILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
export { downloadFileReducer, downloadBulkFile};
