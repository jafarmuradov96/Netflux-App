import Episode from "../episodes/Episode";
import Feature from "../feauture/Feature";
import TopRatings from "../topRatings/TopRatings";
import MainCover from "./MainCover/MainCover";

const Main = ({ handleMovieClick }) => {
  return (
    <>
      <MainCover handleMovieClick={handleMovieClick} />

      <div className="container">
        <Feature handleMovieClick={handleMovieClick} />
        <Episode />
        <TopRatings handleMovieClick={handleMovieClick} />
      </div>
    </>
  );
};

export default Main;
