import "./MainCover.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";


export default function MainCover({ topRatedMovies, handleMovieClick }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {topRatedMovies.map((movie) => {
        return (
          <div className="cover-movie" key={movie.id}>
            <div className="cover-movie__image">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt="cover"
              />
            </div>
            <div className="cover-movie__content">
              <Link  to={`${movie?.title}`} onClick={() => handleMovieClick(movie.id)}>
                <h3>{movie?.title}</h3>
                <p>{movie?.overview}</p>
                <div className="cover-movie__content__about">
                  <span>{movie?.release_date}</span> |
                  {/* <span>{movie?.runtime} min</span>  | */}
                  {/* <div className="cover-movie__content__genres">
                  {movie.genre.map((genre, genreIndex) => (
                    <span key={genreIndex}>{genre},</span>
                  ))}
                </div> */}
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
