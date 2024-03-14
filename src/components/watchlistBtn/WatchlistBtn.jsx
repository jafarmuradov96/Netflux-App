// import { useSelector } from "react-redux";
// import Button from "../../ui/Button/Button";

// const WatchlistBtn = ({ handleWatchlistClick, movie }) => {
//   const { watchlist } = useSelector((state) => state.movies);

//   console.log(movie.title, watchlist.includes(movie));
//   console.log("watchlist", watchlist);
//   return (
//     <>
//       <Button onClick={() => handleWatchlistClick(movie)}>
//         {!watchlist.includes(movie) ? 'Add Watchlist' : 'Remove Watchlist'}
//       </Button>
//     </>
//   );
// };

// export default WatchlistBtn;


import { useSelector } from "react-redux";
import Button from "../../ui/Button/Button";

const WatchlistBtn = ({ handleWatchlistClick, movie }) => {
  const { watchlist } = useSelector((state) => state.movies);

  // Log the movie title and watchlist for debugging
  console.log("Movie Title:", movie.title);
  console.log("Watchlist:", watchlist);

  // Check if the movie is in the watchlist
  const isInWatchlist = watchlist.some(item => item.id === movie.id);

  return (
    <>
      <Button onClick={() => handleWatchlistClick(movie)}>
        {isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
      </Button>
    </>
  );
};

export default WatchlistBtn;
