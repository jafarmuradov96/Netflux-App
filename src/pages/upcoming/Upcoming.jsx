import React from "react";
import "./Upcoming.scss";
import HeadingSection from "../../components/heading/HeadingSection";
import MovieItem from "../../components/Movies/MovieItem/MovieItem";
import { useSelector } from "react-redux";

const Upcoming = ({ handleMovieClick }) => {
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);
  return (
    <div className="container">
      <div className="upcoming">
        <HeadingSection>Upcoming Movies</HeadingSection>

        <div className="upcoming__list">
          {upcomingMovies.map((movie) => (
            <MovieItem
              handleMovieClick={handleMovieClick}
              key={movie?.id}
              movie={movie}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
