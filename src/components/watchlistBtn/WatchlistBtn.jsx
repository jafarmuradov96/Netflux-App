import { useSelector } from "react-redux";
import Button from "../../ui/Button/Button";

const WatchlistBtn = ({ handleWatchlistClick, movie }) => {
  const { watchlist } = useSelector((state) => state.movies);
  return (
    <>
      <Button onClick={() => handleWatchlistClick(movie)}>
        {!watchlist.includes(movie) ? 'Add Watchlist' : 'Remove Watchlist'}
      </Button>
    </>
  );
};

export default WatchlistBtn;
