import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-description">
      <div className="movie-details">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-description-text">{movie.description}</p>
      </div>
      <div className="video-container">
        <iframe
          title="Movie Trailer"
          src={movie.trailerLink}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/" className="back-link">
        Back to Home
      </Link>
    </div>
  );
};

export default MovieDescription;
