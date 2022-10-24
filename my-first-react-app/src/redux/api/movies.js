import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headers = { // headers that's gonna use our API
    'X-RapidAPI-Key': '1e02252ff4mshc9eced3c7717c56p1ee5edjsn55034aca9a2f',
    'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
}

export const moviesApi = createApi({
    reducerPath: 'moviesApi', // name of the reducer
    baseQuery: fetchBaseQuery({ baseUrl: 'https://mdblist.p.rapidapi.com'}), // base url
    endpoints: (builder) => ({
        fetchMovies: builder.query({ // query for GETs, mutation for all other methods.
            query: (s) => ({ // parameters
                url: `?s=${s}`, // url with their path or query params
                method: 'GET', // method
                headers // headers of the endpoint instanciated before
            })
        })
    })
});

export const { useFetchMoviesQuery } = moviesApi; // set a name to our method