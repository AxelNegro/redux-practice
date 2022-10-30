import { errorFetchMovieRatings, startFetchMovieRatings, successFetchMovieRatings } from "../actions/movies";

const initialState = {
    isFetching: false,
    isLoading: false,
    error: null,
    success: null,
    rating: {}
}

const MoviesReducer = (state = initialState, action) =>  {
    switch(action.type) {
        case startFetchMovieRatings.toString():
            return { 
                ...state,
                isLoading: true,
                isFetching: true,
            };
        break;
        case successFetchMovieRatings.toString():
            return {
                ...state,
                isLoading: false,
                isFetching: false,
                ratings: action.payload.data,
                success: true,
                error: null,
            };
        case errorFetchMovieRatings.toString():
            return {
                ...state,
                isLoading: false,
                isFetching: false,
                ratings: {},
                success: false,
                error: action.payload.error
            };
        break;
        default:
            return state;
    }
}

export default MoviesReducer;