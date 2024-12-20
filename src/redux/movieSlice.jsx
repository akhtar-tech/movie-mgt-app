import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '4e56e97bd1708d6c68ad6b18ff2744a7';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async ({ query, genre, releaseYear, page = 1 }) => {
    const params = {
      api_key: API_KEY,
      page,
    };

    if (query) {
      params.query = query;
      const response = await axios.get(`${BASE_URL}/search/movie`, { params });
      return response.data.results;
    }

    if (genre) {
      params.query = genre;
    }

    if (releaseYear) {
      params.primary_release_year = releaseYear;
      
    }
    const searchResponse = await axios.get(`${BASE_URL}/discover/movie`, { params });
    return searchResponse.data.results;
  }
);

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movie: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    clearSearch(state) {
      state.movie = []; // Clear the search results
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movie = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { clearSearch } = movieSlice.actions;

export default movieSlice.reducer;
