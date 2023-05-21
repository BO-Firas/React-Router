import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieList from './MovieList';
import Filter from './Filter';
import MovieDescription from './MovieDescription';
import './App.css';

const MovieApp = () => {
  const [movies, setMovies] = useState([
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://i.imgur.com/SuW2ZlC.jpg',
      rating: 9.3,
      trailerLink: 'https://www.youtube.com/embed/NmzuHjWmXOc'
    },
    {
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      posterURL: 'https://i.imgur.com/Uzvny9I.jpg',
      rating: 9.2,
      trailerLink:'https://www.youtube.com/embed/UaVTIH8mujA'
    },
    {
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterURL: 'https://i.imgur.com/3jLPB46.jpg',
      rating: 9.0,
      trailerLink:'https://www.youtube.com/embed/EXeTwQWrcwY'
    },
    {
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      posterURL: "https://cdn.europosters.eu/image/1300/posters/pulp-fiction-cover-i1288.jpg",
      rating: 8.9,
      trailerLink: "https://www.youtube.com/embed/s7EdQ4FqbhY"
    },
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      posterURL: "https://www.themoviedb.org/t/p/original/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
      rating: 8.8,
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      title: "The Matrix",
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      posterURL: "https://www.themoviedb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      rating: 8.7,
      trailerLink: "https://www.youtube.com/embed/m8e-FF8MsqU"
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      posterURL: "https://m.media-amazon.com/images/I/81EBp0vOZZL._AC_SY741_.jpg",
      rating: 8.8,
      trailerLink: "https://www.youtube.com/embed/V75dMMIW2B4"
    },
    {
      title: "The Avengers",
      description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      posterURL: "https://www.themoviedb.org/t/p/original/qMxAmzGQO722q0UlssCOPhrXmvX.jpg",
      rating: 8.0,
      trailerLink: "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  const filterMovies = (title, rating) => {
    setTitleFilter(title);
    setRatingFilter(rating);

    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating >= rating
    );
    setFilteredMovies(filtered);
  };

  return (
    <Router>
      <div className="movie-app">
        <Link to="/" className="logo">
          Movies
        </Link>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter
                  onTitleChange={(title) => filterMovies(title, ratingFilter)}
                  onRatingChange={(rating) => filterMovies(titleFilter, rating)}
                />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route
            path="/movies/:title"
            element={<MovieDescription movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default MovieApp;
