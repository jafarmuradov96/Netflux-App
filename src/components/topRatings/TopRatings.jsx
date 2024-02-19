import MovieItem from '../Movies/MovieItem/MovieItem';
import HeadingSection from '../heading/HeadingSection';
import './TopRatings.scss';


const TopRatings = ({ topRatedMovies, handleMovieClick }) => {
  return (
    <div className='top-ratings' id ='top-ratings'>
        <HeadingSection>Top Rated Movies</HeadingSection>

        <div className="top-ratings__list">
        {
          topRatedMovies.map(movie => (

            <MovieItem key = {movie?.id} movie = {movie} handleMovieClick = {handleMovieClick} />
          )).slice(0,4)
        }

      </div>
    </div>
  )
}

export default TopRatings