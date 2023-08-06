import axios from 'axios';
import {
  DOWNLOAD_FILE_FAILURE,
  DOWNLOAD_FILE_REQUEST,
  DOWNLOAD_FILE_SUCCESS,
  DOWNLOAD_BULK_FILE_REQUEST,
  DOWNLOAD_BULK_FILE_SUCCESS,
  DOWNLOAD_BULK_FILE_FAILURE
} from './types';
import { BACKEND_URL,
        FILE_API,
        DOWNLOAD_FILE,
        BULK_DOWNLOAD
 } from './url';

const fetchDownloadRequest = () => {
  return {
    type: DOWNLOAD_FILE_REQUEST,
  };
};

const fetchDownloadSuccess = (data) => {
  return {
    type: DOWNLOAD_FILE_SUCCESS,
    payload: data,
  };
};

const fetchDownloadFailure = (error) => {
  return {
    type: DOWNLOAD_FILE_FAILURE,
    payload: error,
  };
};

const downloadBulkFileRequest =()=>{
  return{
    type: DOWNLOAD_BULK_FILE_REQUEST
  }
} 

const downloadBulkFileSuccess = (data)=>{
  return{
    type: DOWNLOAD_BULK_FILE_SUCCESS,
    payload:data
  }
} 

const downloadBulkFileFailed = (error)=>{
  return{
    type: DOWNLOAD_BULK_FILE_FAILURE,
    payload: error
  }
}

export const downloadFile = (fileName) => {
  return (dispatch) => {
  dispatch(fetchDownloadRequest)
    axios
      .get(BACKEND_URL+FILE_API+DOWNLOAD_FILE+fileName)
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);
        dispatch(fetchDownloadSuccess(response.data))
      })
      .catch((error) => {
        dispatch(fetchDownloadFailure(error.message));
      });
  };
};

export const downloadBulkFile = (filenames)=>{
  const queryParams = filenames.map((filename) => `filename=${filename}`).join('&');
  const apiUrl = BACKEND_URL + FILE_API + BULK_DOWNLOAD+"?"+queryParams;
  return (dispatch)=>{
    dispatch(downloadBulkFileRequest);
    axios.get(apiUrl, { responseType: 'blob' })
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'files.zip');
      document.body.appendChild(link);
      link.click();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}
