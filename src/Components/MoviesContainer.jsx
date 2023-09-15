import PropTypes from "prop-types";

import "./MoviesContainer.css";

import data from "../film.json";

import Movie from "./Movie";

const MoviesContainer = ({ value }) => {
  const filterMovies = (movies, value) => {
    if (!value.trim()) {
      return movies;
    } else {
      return movies.filter((movie) => {
        return movie.Title.toLowerCase().includes(value.trim());
      });
    }
  };

  const filteredMovies = filterMovies(data, value);

  return (
    <div className="movies-container">
      {filteredMovies.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
};

MoviesContainer.propTypes = {
  value: PropTypes.string
};

export default MoviesContainer;
