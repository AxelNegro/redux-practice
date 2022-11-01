import { createAction } from "@reduxjs/toolkit";

const BASE_URL = 'https://movie-details1.p.rapidapi.com';
const headers = {
    'X-RapidAPI-Key': '1e02252ff4mshc9eced3c7717c56p1ee5edjsn55034aca9a2f',
    'X-RapidAPI-Host': 'movie-details1.p.rapidapi.com'
}

export const startFetchMovieDetails = createAction('START_FETCH_MOVIE_DETAILS');
export const successFetchMovieDetails = createAction('SUCCESS_FETCH_MOVIE_DETAILS');
export const errorFetchMovieDetails = createAction('ERROR_FETCH_MOVIE_DETAILS');

export const fetchMovieDetails = (id) => async (dispatch) => {
    try{
        dispatch(startFetchMovieDetails());

        const response = await fetch(`${BASE_URL}/imdb_api/movie?id=${id}`, {headers});
        const data = await response.json();

        dispatch(successFetchMovieDetails({data}));
    } catch (error){
        dispatch(errorFetchMovieDetails({error}))
    }
}