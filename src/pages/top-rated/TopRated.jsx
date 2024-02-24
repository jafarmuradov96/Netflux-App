import React from "react";
import "./TopRated.scss";
import HeadingSection from "../../components/heading/HeadingSection";
import MovieItem from "../../components/Movies/MovieItem/MovieItem";
import { useSelector } from "react-redux";

const TopRated = ({ handleMovieClick, handleWatchlistClick }) => {
  const { topRatedMovies, loading} = useSelector((state) => state.movies);
  if (loading) {
    return <div className="movies-list">Loading...</div>;
  }
  return (
    <div className="container">
      <div className="top-rated">
        <HeadingSection>Top Rated Movies</HeadingSection>
        <div className="top-rated__list">
          {topRatedMovies.map((movie) => (
            <MovieItem
              handleMovieClick={handleMovieClick}
              key={movie?.id}
              movie={movie}
              handleWatchlistClick = {handleWatchlistClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRated;
