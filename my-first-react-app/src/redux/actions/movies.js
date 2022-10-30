import { createAction } from "@reduxjs/toolkit";

const BASE_URL = 'https://movie-details1.p.rapidapi.com';
const headers = {
    'X-RapidAPI-Key': '1e02252ff4mshc9eced3c7717c56p1ee5edjsn55034aca9a2f',
    'X-RapidAPI-Host': 'movie-details1.p.rapidapi.com'
}

export const startFetchMovieRatings = createAction('START_FETCH_MOVIE_RATINGS');
export const successFetchMovieRatings = createAction('SUCCESS_FETCH_MOVIE_RATINGS');
export const errorFetchMovieRatings = createAction('ERROR_FETCH_MOVIE_RATINGS');

export const fetchMovieRatings = (id) => async (dispatch) => {
    try{
        dispatch(startFetchMovieRatings());

        const response = await fetch(`${BASE_URL}/imdb_api/movie?id=${id}`, {headers});
        const data = await response.json();
        
        dispatch(successFetchMovieRatings({data}));
    } catch (error){
        dispatch(errorFetchMovieRatings({error}))
    }
}