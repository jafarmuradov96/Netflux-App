import { useSelector } from "react-redux";
import MovieItem from "../Movies/MovieItem/MovieItem";
import HeadingSection from "../heading/HeadingSection";
import "./Watchlist.scss";

const Watchlist = ({ handleMovieClick, handleWatchlistClick }) => {
  const { watchlist } = useSelector((state) => state.movies);
  return (
    <div className="container">
      <div className="watchlist">
        <HeadingSection>Your Watchlist</HeadingSection>

        <div className="watchlist__list">
          {watchlist &&
            watchlist.map((movie) => (
              <MovieItem
                movie={movie}
                key={movie?.id}
                handleMovieClick={handleMovieClick}
                handleWatchlistClick={handleWatchlistClick}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
