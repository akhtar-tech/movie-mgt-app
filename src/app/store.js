import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../features/movies/moviesSlice';
import topRatedMoviesReducer from '../features/topRatedMovies/topRatedMoviesSlice';
import allReducer from '../features/all/allSlice';
import movieDetailReducer from '../features/movieDetail/movieDetailSlice';
import searchReducer from '../features/search/searchSlice';
import movie from '../redux/movieSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    topRatedMovies: topRatedMoviesReducer,
    all: allReducer,
    movieDetail: movieDetailReducer,
    search: searchReducer,
    movie: movie,
  },
});

