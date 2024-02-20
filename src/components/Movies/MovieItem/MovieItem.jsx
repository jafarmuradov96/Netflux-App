import { Link, useNavigate } from "react-router-dom";
import "./MovieItem.scss";
import { FaStar } from "react-icons/fa";
import Rate from "../../rate/Rate";
import WatchlistBtn from "../../watchlistBtn/WatchlistBtn";

const MovieItem = ({ movie, handleMovieClick, openModal }) => {
  return (
    <div className="movie-cart">
      <div className="movie-cart__image">
        <Link to={`${movie?.title}`} onClick={() => handleMovieClick(movie.id)}>
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
        <span className="movie-cart__stars__rate">
          <Rate openModal={openModal} id = {movie.id}/>
        </span>
      </div>

      <div className="movie-cart__title">
        <Link to={`${movie?.title}`} onClick={() => handleMovieClick(movie.id)}>
          <h3>{movie?.title}</h3>
        </Link>
      </div>
      <div className="movie-cart__button">
        <WatchlistBtn />
      </div>
    </div>
  );
};

export default MovieItem;
