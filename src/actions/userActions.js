import axios from "axios";
import { LOGIN_REQUEST, LOGIN_FAILED,LOGIN_SUCCESS } from "./types";
import { LOGIN } from "./url";
const fetchDataRequest = () => {
    return {
      type: LOGIN_REQUEST,
    };
  };
  
  const fetchDataSuccess = (data) => {
    return {
      type: LOGIN_SUCCESS,
      payload: data,
    };
  };
  
  const fetchDataFailure = (error) => {
    return {
      type: LOGIN_FAILED,
      payload: error,
    };
  };
  
  export const login = (user,pass) => {
    const data = {username:user,password:pass}
    return (dispatch) => {
      dispatch(fetchDataRequest);
      axios
        .post(LOGIN, data) 
        .then((response) => {
            const { access_token } = response.data;
      // Simpan token di localStorage
      localStorage.setItem('token', access_token);
          dispatch(fetchDataSuccess(response.data));
        })
        .catch((error) => {
          dispatch(fetchDataFailure(error.message));
        });
    };
  };