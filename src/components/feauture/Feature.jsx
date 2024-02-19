import MovieItem from "../Movies/MovieItem/MovieItem";
import HeadingSection from "../heading/HeadingSection";
import "./Feature.scss";

const Feature = ({ upcomingMovies, handleMovieClick }) => {


  const generateRandomId = () => {
    return Math.floor(Math.random() * 1000000);
  };
  
  const selectUniqueMovies = (upcomingMovies, count) => {
    const selectedMovies = [];
    const remainingMovies = [...upcomingMovies]; // Create a copy of upcomingMovies
  
    for (let i = 0; i < count && remainingMovies.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * remainingMovies.length);
      const selectedMovie = remainingMovies.splice(randomIndex, 1)[0];
      selectedMovies.push({ ...selectedMovie, id: generateRandomId() });
    }
  
    return selectedMovies;
  };
  
  const featuredMovies = selectUniqueMovies(upcomingMovies, 4);


  return (
    <div className="feature" >
      <HeadingSection>Featured Movies</HeadingSection>

      <div className="feature__list">
        {
          featuredMovies.map(movie => (
            <MovieItem key={movie?.id} movie = {movie} handleMovieClick = {handleMovieClick} />
          ))
        }
      </div>
    </div>
  );
};

export default Feature;
