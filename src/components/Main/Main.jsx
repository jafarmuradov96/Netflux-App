import Episode from "../episodes/Episode";
import Feature from "../feauture/Feature";
import TopRatings from "../topRatings/TopRatings";
import MainCover from "./MainCover/MainCover";

const Main = ({ handleMovieClick, handleWatchlistClick }) => {
  return (
    <>
      <MainCover handleMovieClick={handleMovieClick} />

      <div className="container">
        <Feature handleMovieClick={handleMovieClick} handleWatchlistClick = {handleWatchlistClick}/>
        <Episode />
        <TopRatings handleMovieClick={handleMovieClick} handleWatchlistClick = {handleWatchlistClick} />
      </div>
    </>
  );
};

export default Main;
