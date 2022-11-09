import { createSlice } from "@reduxjs/toolkit"

// Defino el estado inicial

const initialState = {
    isFetching: false,
    isLoading: false,
    error: null,
    success: null,
    details: {}
}

// Defino el reducer

const moviesSlice = createSlice(
    {
        name: 'movies-slice',
        initialState,
        reducers: {
            startFetchMovieDetails(state, action){
                state.isLoading = false;
                state.isFetching = true;
            },
            successFetchMovieDetails(state, action){
                state.isLoading = false;
                state.isFetching = false;
                state.details = action.payload.data;
                state.success = true;
                state.error = null;
            },
            errorFetchMovieDetails(state, action){
                state.isLoading = false;
                state.isFetching = false;
                state.details = {};
                state.success = false;
                state.error = action.payload.error;
            }
        }
    }
)

const { actions, reducer } = moviesSlice;

// Creo las acciones

const { 
    startFetchMovieDetails,
    successFetchMovieDetails,
    errorFetchMovieDetails 
} = actions;

// Exporto las acciones

export { 
    startFetchMovieDetails,
    successFetchMovieDetails,
    errorFetchMovieDetails 
};

// Exporto el reducer

export default reducer;