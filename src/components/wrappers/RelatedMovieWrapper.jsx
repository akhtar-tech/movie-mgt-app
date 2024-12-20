import React from 'react';

const RelatedMovieWrapper = ({ relatedMovies }) => {
    return (
        <div className="mt-8">
        <h3 className="text-2xl font-bold">Related Movies</h3>
        <ul className="mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {relatedMovies.map((movie) => (
            <li key={movie.id} className="text-center">
              <img
                src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto rounded"
              />
              <p className="mt-2">{movie.title}</p>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default RelatedMovieWrapper;
