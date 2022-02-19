import React from 'react';
import Movie from './Movie';
import movieData from './movieData';

//displays Movie components and their data
//need to figure out how to display average of all star ratings
function MovieList() {
  return (
    <div className="movie-container">
      {movieData.map(movie => 
      <Movie key={movie.id} {...movie}/>)}
    </div>
  ); 
}

export default MovieList;
