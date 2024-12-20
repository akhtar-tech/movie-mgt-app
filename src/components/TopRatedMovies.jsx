import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopRatedMovies } from '../features/topRatedMovies/topRatedMoviesSlice';
import MoviesWrapper from './wrappers/MoviesWrapper'; 

const TopRatedMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.topRatedMovies.movies);
  const status = useSelector((state) => state.topRatedMovies.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTopRatedMovies());
    }
  }, [status, dispatch]);

  return (
    <>
      <MoviesWrapper movies={movies} isLoading={status === 'loading'} />
    </>
  );
};

export default TopRatedMovies;
