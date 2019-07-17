export const FETCH_DATA_PENDING = 'FETCH_DATA_PENDING';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export const fetchDataPending = () => ({
    type: FETCH_DATA_PENDING
  });
  
  export const fetchDataSuccess = data => ({
    type: FETCH_DATA_SUCCESS,
    payload: { data }
  });
  
  export const fetchDataError = error => ({
    type: FETCH_DATA_ERROR,
    payload: { error }
  });