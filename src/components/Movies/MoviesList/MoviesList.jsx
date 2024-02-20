import MovieItem from "../MovieItem/MovieItem";
import "./MoviesList.scss";

const MoviesList = ({
  sortedYearsMovies,
  movieData,
  loading,
  handleMovieClick,
  openModal,
}) => {
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
          openModal = {openModal}
        />
      ))}
    </div>
  );
};

export default MoviesList;
