import { errorFetchMovieDetails,
    startFetchMovieDetails,
    successFetchMovieDetails
 } from "../actions/movies";

const initialState = {
    isFetching: false,
    isLoading: false,
    error: null,
    success: null,
    details: {}
}

const MoviesReducer = (state = initialState, action) =>  {
    switch(action.type) {
        case startFetchMovieDetails.toString():
            return { 
                ...state,
                isLoading: false,
                isFetching: true,
            };
        break;
        case successFetchMovieDetails.toString():
            return {
                ...state,
                isLoading: false,
                isFetching: false,
                details: action.payload.data,
                success: true,
                error: null,
            };
        case errorFetchMovieDetails.toString():
            return {
                ...state,
                isLoading: false,
                isFetching: false,
                details: {},
                success: false,
                error: action.payload.error
            };
        break;
        default:
            return state;
    }
}

export default MoviesReducer;