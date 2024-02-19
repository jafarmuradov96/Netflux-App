import MovieItem from "../MovieItem/MovieItem";
import './MoviesList.scss';

const MoviesList = ({ movieData, loading, handleMovieClick }) => {
  if (loading) {
    return <div className="movies-list">Loading...</div>;
  }

  if (!Array.isArray(movieData) || movieData.length === 0) {
    return <div className="movies-list">No movies available</div>;
  }

  return (
    <div className="movies-list">
      {movieData.map(movie => (
        <MovieItem key={movie.id} movie={movie} handleMovieClick = {handleMovieClick}/>
      ))}
    </div>
  );
};

export default MoviesList;