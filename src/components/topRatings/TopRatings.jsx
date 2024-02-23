import { useSelector } from "react-redux";
import MovieItem from "../Movies/MovieItem/MovieItem";
import HeadingSection from "../heading/HeadingSection";
import "./TopRatings.scss";

const TopRatings = ({ handleMovieClick, handleWatchlistClick }) => {
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  return (
    <div className="top-ratings" id="top-ratings">
      <HeadingSection>Top Rated Movies</HeadingSection>

      <div className="top-ratings__list">
        {topRatedMovies
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

export default TopRatings;
