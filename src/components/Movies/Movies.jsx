import HeadingSection from "../heading/HeadingSection";
import "./Movies.scss";
import MoviesFiltered from "./MoviesFiltered/MoviesFiltered";
import MoviesList from "./MoviesList/MoviesList";
import MoviesSorted from "./MoviesSorted/MoviesSorted";

const Movies = ({ movieData, loading, handleMovieClick }) => {
  return (
    <div className="container">
        <div className="movies">
          <HeadingSection>Movies</HeadingSection>

          <div className="movies__filter">
              <MoviesSorted />

              <MoviesFiltered />
          </div>

          <div className="">
              <MoviesList handleMovieClick = {handleMovieClick} movieData = {movieData} loading = {loading} />
          </div>
        </div>
    </div>
  )
};

export default Movies;
