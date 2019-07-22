export const FETCH_DATA_PENDING = 'FETCH_DATA_PENDING';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const SET_DOCUMENTS = 'SET_DOCUMENTS'; 
export const SET_COLUMNS = 'SET_COLUMNS';
export const SET_COLUMN_ORDER = 'SET_COLUMN_ORDER';

export const fetchDataPending = () => ({
    type: FETCH_DATA_PENDING
  });
  
  export const fetchDataError = error => ({
    type: FETCH_DATA_ERROR,
    payload: { error }
  });

  export const setDocuments = documents => ({
    type : SET_DOCUMENTS,
    payload: { documents }
  });

  export const setColumns = columns => ({
    type: SET_COLUMNS,
    payload: { columns }
  });

  export const setColumnOrder = columnOrder => ({
    type: SET_COLUMN_ORDER,
    payload: { columnOrder }
  })