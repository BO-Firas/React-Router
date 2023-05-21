import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.title}`}>
      <div className="movie-card">
        <img className="movie-poster" src={movie.posterURL} alt={movie.title} />
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-description">{movie.description}</p>
        <p className="movie-rating">Rating: {movie.rating}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
