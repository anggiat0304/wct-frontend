import axios from 'axios';
import { DOWNLOAD_FILE_FAILURE,DOWNLOAD_FILE_REQUEST, DOWNLOAD_FILE_SUCCESS } from './types';
export const fetchDataRequest = () => {
  return {
    type: DOWNLOAD_FILE_REQUEST,
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: DOWNLOAD_FILE_SUCCESS,
    payload: data,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: DOWNLOAD_FILE_FAILURE,
    payload: error,
  };
};

export const downloadFile = (fileName) => {
  return (dispatch) => {
    axios
      .get('http://localhost:3009/api/applicant/${fileName}') 
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};
