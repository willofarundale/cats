import { 
FETCH_DATA_PENDING, 
FETCH_DATA_ERROR,
SET_DOCUMENTS,
SET_COLUMNS,
SET_COLUMN_ORDER,
} from '../actions';

const initialState = {
    pending: false,
    documents: [],
    columns: [],
    columnOrder:[],
    error: null
};

export default function dataReducer(state=initialState, action) {
    switch(action.type) {

        case FETCH_DATA_PENDING:
            return {
                ...state,
                pending: true,
                error: null
            }
        
        case FETCH_DATA_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload.error
            }

        case SET_DOCUMENTS:
            return {
                ...state,
                documents: action.payload.documents,
                pending: false
            } 
        
        case SET_COLUMNS:
            return {
                ...state,
                columns: action.payload.columns,
                pending: false
            }

        case SET_COLUMN_ORDER:
            return {
                ...state,
                columnOrder: action.payload.columnOrder,
                pending:false
            }

        default:
            return state;

       }
}

export const getDocuments = state => state.data.documents;
export const getColumns = state => state.data.columns;
export const getColumnOrder = state => state.data.columnOrder;
export const getDataPending = state => state.data.pending;
export const getDataError = state => state.data.error;