import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {movies.map((movie, index) => (
          <Movie 
            key={index}
            title={movie.title} 
            image={movie.poster_path
            } 
            description={movie.overview} 
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
