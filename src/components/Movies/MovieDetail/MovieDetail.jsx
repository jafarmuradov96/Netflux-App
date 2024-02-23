import { useSelector } from "react-redux";
import WatchlistBtn from "../../watchlistBtn/WatchlistBtn";
import "./MovieDetail.scss";
import { FaStar } from "react-icons/fa";


const MovieDetail = ({ handleWatchlistClick }) => {

  const { selectedMovie } = useSelector((state) => state.movies)
  console.log(selectedMovie, 222222);
  return (
    <>
      {
        selectedMovie && 

        <div className="container">
        <div className="movie-detail">
          <div className="movie-detail__image">
            <img
              src={`https://image.tmdb.org/t/p/w500${selectedMovie?.poster_path}`}
              alt={selectedMovie?.title}
            />
          </div>
  
          <div className="movie-detail__content">
            <h3>{selectedMovie.title}</h3>
            <p>{selectedMovie?.overview}</p>
  
            <div className="movie-cart__stars">
              <span className="movie-cart__stars__rating">
                <FaStar />
                <span>{selectedMovie?.vote_average.toFixed(1)}</span>
              </span>{" "}
              
            </div>
  
            <div className="movie-detail__content__time">
              <span>{selectedMovie?.runtime} min</span>  |   <span>{selectedMovie?.release_date}</span>
            </div>
  
            <div className="movie-detail__content__genre">
              {
                selectedMovie.genres.map(genre =>  (
                  <span key={genre?.id}>{genre.name}, </span>
                ))
              }
            </div>
  
            <div className="movie-cart__button movie-detail__content__btn">
              <WatchlistBtn handleWatchlistClick = {handleWatchlistClick} movie = {selectedMovie}/>
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default MovieDetail;
