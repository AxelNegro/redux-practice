import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '../redux/api/movies';
import MoviesReducer from '../redux/reducers/movies';
import MoviesReducerSlice from "../redux/slices/movies"
export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    MoviesReducerSlice,
    MoviesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});
 