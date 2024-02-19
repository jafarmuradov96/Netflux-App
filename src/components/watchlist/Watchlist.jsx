import MovieItem from "../Movies/MovieItem/MovieItem";
import HeadingSection from "../heading/HeadingSection";
import "./Watchlist.scss";

const Watchlist = () => {
  return (
    <div className="container">
      <div className="watchlist">
        <HeadingSection>Your Watchlist</HeadingSection>

        <div className="watchlist__list">
            <MovieItem />

        </div>
      </div>
    </div>
  );
};

export default Watchlist;
