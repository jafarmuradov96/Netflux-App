// import "./MovieDetail.scss";

// const MovieDetail = ({ selectedMovie }) => {
//   return (
//       <>
//       {
//         selectedMovie && <h2 style={{marginTop: '100px'}}>aaaa</h2>
//       }
        
//       </>
//   );
// };

// export default MovieDetail;



import Rate from "../../rate/Rate";
import WatchlistBtn from "../../watchlistBtn/WatchlistBtn";
import "./MovieDetail.scss";
import { FaStar } from "react-icons/fa";

const MovieDetail = ({selectedMovie}) => {

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
              |
              <span className="movie-cart__stars__rate">
                <Rate />
              </span>
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
  
            {/* <div className="movie-detail__content__actors">
              <span><b style={{paddingRight: '6px'}}>Director:</b>  Quentin Tarantino</span>
              <span><b style={{paddingRight: '6px'}}>Writer:</b>  Quentin Tarantino</span>
              <span><b style={{paddingRight: '6px'}}>Actors:</b>  Jamie Foxx, Christoph Waltz, Leonardo DiCaprio</span>
            </div> */}
  
            <div className="movie-cart__button movie-detail__content__btn">
              <WatchlistBtn />
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default MovieDetail;
