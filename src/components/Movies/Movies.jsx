import { useState } from "react";
import HeadingSection from "../heading/HeadingSection";
import "./Movies.scss";
import MoviesFiltered from "./MoviesFiltered/MoviesFiltered";
import MoviesList from "./MoviesList/MoviesList";
import MoviesSorted from "./MoviesSorted/MoviesSorted";

const Movies = ({ movieData, loading, handleMovieClick, openModal }) => {
  const [sortedYear, setSortedYear] = useState("");
  const [sortedRating, setSortedRating] = useState("");

  const handleSortChange = (e) => {
    setSortedYear(e.target.value);
    setSortedRating(e.target.value);
  };
  let sortedYearsMovies = [...movieData];
  if (sortedYear === "sortedYear") {
    sortedYearsMovies = [...movieData].sort((a, b) => {
      return (
        new Date(b.release_date).getFullYear() -
        new Date(a.release_date).getFullYear()
      );
    });
  }

  if (sortedRating === "sortedRating") {
    sortedYearsMovies = [...movieData].sort((a, b) => {
      return (
        parseFloat(b.vote_average).toFixed(1) -
        parseFloat(a.vote_average).toFixed(1)
      );
    });
  }

  return (
    <div className="container">
      <div className="movies">
        <HeadingSection>Movies</HeadingSection>

        <div className="movies__filter">
          <MoviesSorted handleSortChange={handleSortChange} />

          <MoviesFiltered />
        </div>

        <div className="">
          <MoviesList
            sortedYearsMovies={sortedYearsMovies}
            handleMovieClick={handleMovieClick}
            movieData={movieData}
            loading={loading}
            openModal = {openModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Movies;
