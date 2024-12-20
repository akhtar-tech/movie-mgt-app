import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MovieDetail from './components/MovieDetail';
import Footer from './components/ui/Footer';
import Navbar from './components/ui/Navbar';
import Search from './components/Search';
import MoviesWrapper from './components/wrappers/MoviesWrapper';
import SearchResult from './components/SearchResult';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="*" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
          <Route path='/movie/:id' element={<MovieDetail />} />
          <Route path="/search/:query/:genre/:releaseYear" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
