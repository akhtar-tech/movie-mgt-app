import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PopularMovies from './PopularMovies';
import TopRatedMovies from './TopRatedMovies';
import AllTrendingMovies from './AllTrendingMovies';
import Search from './Search';
import { clearSearch } from '../redux/movieSlice';

const Dashboard = () => {
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  const handleSearchSubmit = () => {
    setIsSearchClicked(!isSearchClicked);
  };

   // Reset isSearchClicked when navigating back to the dashboard
   useEffect(() => {
    if (location.pathname === '/') {
      setIsSearchClicked(false);
      dispatch(clearSearch());
    }
  }, [location, dispatch]);

  return (
    <div>
      <Search onSearchSubmit={handleSearchSubmit}/>
      {!isSearchClicked && (
        <>
      <AllTrendingMovies />
      <div className="mb-8 sm:text-start text-center">
        <h1 className="movies-wrapper-title scale-75 sm:scale-100 inline-block text-2xl 
        md:text-3xl lg:text-4xl font-bold hover:-translate-y-1 w-fit transition duration-300
         ease-in-out m-1 p-2 sm:m-2 sm:p-4 sm:ml-24">Popular</h1>
       <PopularMovies />
      </div>

      <div className="mb-8 sm:text-start text-center">
      <h1 className="movies-wrapper-title inline-block text-2xl md:text-3xl lg:text-4xl 
      font-bold hover:-translate-y-1 w-fit transition 
       p-2 sm:m-2 sm:p-4 sm:ml-24 scale-75 sm:scale-100
      duration-300 ease-in-out ">Top Rated</h1>
      <TopRatedMovies />
      </div>
      </>
      )}
    </div>
  );
};

export default Dashboard;