import { useSelector } from "react-redux";
import MovieItem from "../Movies/MovieItem/MovieItem";
import HeadingSection from "../heading/HeadingSection";
import "./Feature.scss";

const Feature = ({ handleMovieClick, handleWatchlistClick }) => {
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);

  return (
    <div className="feature">
      <HeadingSection>Featured Movies</HeadingSection>

      <div className="feature__list">
        {upcomingMovies
          .map((movie) => (
            <MovieItem
              key={movie?.id}
              movie={movie}
              handleMovieClick={handleMovieClick}
              handleWatchlistClick = {handleWatchlistClick}
            />
          ))
          .slice(0, 4)}
      </div>
    </div>
  );
};

export default Feature;
