import { Link, useNavigate } from "react-router-dom";
import "./MovieItem.scss";
import { FaStar } from "react-icons/fa";
import Rate from "../../rate/Rate";
import WatchlistBtn from "../../watchlistBtn/WatchlistBtn";

const MovieItem = ({ movie, handleMovieClick }) => {

  return (
    <div className="movie-cart">
      <Link to={`${movie?.title}`} onClick={() => handleMovieClick(movie.id)} >
        <div className="movie-cart__image">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt="movie"
          />
        </div>

        <div className="movie-cart__stars">
          <span className="movie-cart__stars__rating">
            <FaStar />
            <span>{movie?.vote_average.toFixed(1)}</span>
          </span>
          <span className="movie-cart__stars__rate">
            <Rate />
          </span>
        </div>

        <div className="movie-cart__title">
          <h3>{movie?.title}</h3>
        </div>
        <div className="movie-cart__button">
          <WatchlistBtn />
        </div>
      </Link>
    </div>
  );
};

export default MovieItem;
