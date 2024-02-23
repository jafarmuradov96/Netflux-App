import { useSelector } from "react-redux";
import MovieItem from "../MovieItem/MovieItem";
import "./MoviesList.scss";

const MoviesList = ({
  sortedYearsMovies,
  loading,
  handleMovieClick,
  handleWatchlistClick
}) => {
  const  movieData  = useSelector((state) => state.movies.movieData)
  if (loading) {
    return <div className="movies-list">Loading...</div>;
  }

  if (!Array.isArray(movieData) || movieData.length === 0) {
    return <div className="movies-list">No movies available</div>;
  }

  return (
    <div className="movies-list">
      {sortedYearsMovies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          handleMovieClick={handleMovieClick}
          handleWatchlistClick = {handleWatchlistClick}
        />
      ))}
    </div>
  );
};

export default MoviesList;
