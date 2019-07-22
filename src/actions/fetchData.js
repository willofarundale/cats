import {
    fetchDataPending,
    fetchDataError,
    setDocuments,
    setColumns,
    setColumnOrder
} from './index';

export function fetchData() {
    return dispatch => {
      dispatch(fetchDataPending());
      return fetch("http://localhost:3001/data")
        .then(handleErrors)
        .then(res => res.json())
        .then(res => {
          dispatch(setDocuments(res.documents));
          dispatch(setColumns(res.columns));
          dispatch(setColumnOrder(res.columnOrder));
          return res;
        })
        .catch(error => dispatch(fetchDataError(error)));
    };
  }
  
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }