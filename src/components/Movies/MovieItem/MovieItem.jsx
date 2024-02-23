import { Link } from "react-router-dom";
import "./MovieItem.scss";
import { FaStar } from "react-icons/fa";
import WatchlistBtn from "../../watchlistBtn/WatchlistBtn";

const MovieItem = ({ movie, handleMovieClick, handleWatchlistClick, btnName }) => {
  return (
    <>
      <div className="movie-cart">
        <div className="movie-cart__image">
          <Link
            to={`${movie?.title}`}
            onClick={() => handleMovieClick(movie.id)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt="movie"
            />
          </Link>
        </div>

        <div className="movie-cart__stars">
          <span className="movie-cart__stars__rating">
            <FaStar />
            <span>{movie?.vote_average.toFixed(1)}</span>
          </span>
        </div>

        <div className="movie-cart__title">
          <Link
            to={`${movie?.title}`}
            onClick={() => handleMovieClick(movie?.id)}
          >
            <h3>{movie?.title}</h3>
          </Link>
        </div>
        <div className="movie-cart__button">
          <WatchlistBtn handleWatchlistClick = {handleWatchlistClick} movie = {movie} btnName = {btnName}/>
        </div>
      </div>
    </>
  );
};

export default MovieItem;
