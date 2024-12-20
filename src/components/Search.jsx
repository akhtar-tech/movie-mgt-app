import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/movieSlice';
import MoviesWrapper from './wrappers/MoviesWrapper';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Search = ({ onSearchSubmit }) => {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [page, setPage] = useState(1);
  const [searchClicked, setSearchClicked] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movie);
  const status = useSelector((state) => state.movie.status);
  const error = useSelector((state) => state.movie.error);
  const navigate = useNavigate()
  const [field, setField] = useState('')
  const [value, setValue] = useState('')
  const location = useLocation();

  const handleSearch = () => {
    setSearchClicked(true);
    setPage(1); // Reset to the first page on new search
    dispatch(fetchMovies({ query, genre, releaseYear, page: 1 }));
    onSearchSubmit();
    navigate(`/search/${encodeURIComponent(field)}/${encodeURIComponent(value)}`);
  };

  useEffect(() => {
    // Reset fields if navigating to the Dashboard or other non-search pages
    if (location.pathname === '/') {
      resetFields();
    }
  }, [location.pathname]);

  const handleInputChange = (field, value) => {
    if (value.length > 0) {
    setActiveField(field);
    } else {
      setActiveField(null);
    }
    if (field === 'query') {
      setQuery(value);
    } else if (field === 'genre') {
      setGenre(value);
    } else if (field === 'releaseYear') {
      setReleaseYear(value);
    }
    setField(field);
    setValue(value);
  };
  
  const resetFields = () => {
    setQuery('');
    setGenre('');
    setReleaseYear('');
    setActiveField(null);
  };
  
    const handleNextPage = () => {
      setPage((prevPage) => prevPage + 1);
      dispatch(fetchMovies({ query, page: page + 1 }));
    };
  
    const handlePreviousPage = () => {
      if (page > 1) {
        setPage((prevPage) => prevPage - 1);
        dispatch(fetchMovies({ query, page: page - 1 }));
      }
    };
  
    return (
      <div className="container mx-auto py-6">
        <div className="flex justify-center mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => handleInputChange('query', e.target.value)}
          className="border border-gray-300 rounded p-2 w-1/2"
          placeholder="Search by title..."
          disabled={activeField && activeField !== 'query'}
        />
        <p className="p-2 w-1/8 ml-2">OR</p>
        <input
          type="text"
          value={genre}
          onChange={(e) => handleInputChange('genre', e.target.value)}
          className="border border-gray-300 rounded p-2 w-1/4 ml-2"
          placeholder="Search by genre..."
          disabled={activeField && activeField !== 'genre'}
        />
        <p className="p-2 w-1/8 ml-1">OR</p>
        <input
          type="text"
          value={releaseYear}
          onChange={(e) => handleInputChange('releaseYear', e.target.value)}
          className="border border-gray-300 rounded p-2 w-1/4 ml-2"
          placeholder="Search by release year..."
          disabled={activeField && activeField !== 'releaseYear'}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded ml-2"
        >
          Search
        </button>
        <button
          onClick={resetFields}
          className="bg-red-500 text-white p-2 rounded ml-2"
        >
          Clear
        </button>
        </div>
        {status === 'loading' && <div>Loading...</div>}
        {status === 'failed' && <div>Error: {error}</div>}
        <MoviesWrapper movies={movies} isLoading={status === 'loading'} />
        {searchClicked && movies.length > 0 && (
            <div className="flex justify-between mt-6">
            <button
              onClick={handlePreviousPage}
              className="bg-gray-500 text-white p-2 rounded"
              disabled={page === 1}
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Next
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default Search;
