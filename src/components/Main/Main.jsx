import Episode from "../episodes/Episode"
import Feature from "../feauture/Feature"
import TopRatings from "../topRatings/TopRatings"
import MainCover from "./MainCover/MainCover"

const Main = ({ upcomingMovies, topRatedMovies, handleMovieClick }) => {
  return (
    <>
      <MainCover topRatedMovies = {topRatedMovies} handleMovieClick = {handleMovieClick} />

      <div className="container">
        <Feature upcomingMovies = {upcomingMovies} handleMovieClick = {handleMovieClick}/>
        <Episode />
        <TopRatings topRatedMovies = {topRatedMovies} handleMovieClick = {handleMovieClick}/>
      </div>
    </>
  )
}

export default Main