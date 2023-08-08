import axios from 'axios';
import { FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE } from './types';
import { APPLICANT_API} from './url';

const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

export const fetchApplicantList = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest);
    axios
      .get(APPLICANT_API) 
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};
