import { 
FETCH_DATA_PENDING, 
FETCH_DATA_SUCCESS,
FETCH_DATA_ERROR,
} from '../actions';

const initialState = {
    pending: false,
    data: [],
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
        
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.payload.data.documents
            }

        case FETCH_DATA_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload.data.error
            }

        default:
            return state;

       }
}

export const getData = state => state.data.data;
export const getDataPending = state => state.data.pending;
export const getDataError = state => state.data.error;