import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import Main from "./components/Main/Main";
import Watchlist from "./components/watchlist/Watchlist";
import MovieDetail from "./components/Movies/MovieDetail/MovieDetail";
import Movies from "./components/Movies/Movies";
import YourRatings from "./pages/yourRatings/YourRatings";
import { useEffect, useState } from "react";
import axios from "axios";
import TopRated from "./pages/top-rated/TopRated";
import Upcoming from "./pages/upcoming/Upcoming";
import { API_URL } from "./services/movie";
import Modal from "./ui/Modal/Modal";
import Button from "./ui/Button/Button";
import { FaStar } from "react-icons/fa";

function App() {
  const [movieData, setMovieData] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState('?');
  const [hoverRatin, setHoverRating] = useState(null);


  const openModal = (id) => {
    const findID = movieData.find((movie) => movie.id === id);

    if (findID) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [moviesResponse, topRatedResponse, upcomingMoviesResponse] =
          await Promise.all([
            axios.get(
              `${API_URL}discover/movie?api_key=${import.meta.env.VITE_API_KEY}`
            ),
            axios.get(
              `${API_URL}movie/top_rated?api_key=${
                import.meta.env.VITE_API_KEY
              }`
            ),
            axios.get(
              `${API_URL}movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}`
            ),
          ]);
        setMovieData(moviesResponse.data.results);
        setTopRatedMovies(topRatedResponse.data.results);
        setUpcomingMovies(upcomingMoviesResponse.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleMovieClick = async (id) => {
    try {
      const response = await axios.get(
        `${API_URL}movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`
      );
      setSelectedMovie(response.data);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

  const handleClickSearch = async () => {
    try {
      const response = await axios.get(
        `${API_URL}search/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&query=${searchValue}`
      );
      setMovieData(response.data.results);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
    setIsShowMenu(false);
  };

  const handleRating = () => {
    // setRating()
  }

  if (loading) {
    return <div className="loading-page">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  // console.log(movieData, '11');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <MainLayout
                searchValue={searchValue}
                handleChangeSearchValue={handleChangeSearchValue}
                handleClickSearch={handleClickSearch}
                isShowMenu={isShowMenu}
                setIsShowMenu={setIsShowMenu}
              />
            }
          >
            <Route
              path="/"
              element={
                <Main
                  handleMovieClick={handleMovieClick}
                  upcomingMovies={upcomingMovies}
                  topRatedMovies={topRatedMovies}
                />
              }
            />
            <Route path="your-ratings" element={<YourRatings />} />
            <Route
              path="movies"
              element={
                <Movies
                  handleMovieClick={handleMovieClick}
                  movieData={movieData}
                  loading={loading}
                  openModal={openModal}
                  rating = {rating}
                />
              }
            />
            <Route
              path="top-rated"
              element={
                <TopRated
                  handleMovieClick={handleMovieClick}
                  topRatedMovies={topRatedMovies}
                  loading={loading}
                />
              }
            />
            <Route
              path="upcoming"
              element={
                <Upcoming
                  handleMovieClick={handleMovieClick}
                  upcomingMovies={upcomingMovies}
                  loading={loading}
                />
              }
            />
            <Route path="watchlist" element={<Watchlist />} />

            <Route
              path="/:id"
              element={<MovieDetail selectedMovie={selectedMovie} />}
            />
            <Route
              path="movies/:id"
              element={<MovieDetail selectedMovie={selectedMovie} />}
            />
            <Route
              path="top-rated/:id"
              element={<MovieDetail selectedMovie={selectedMovie} />}
            />
            <Route
              path="upcoming/:id"
              element={<MovieDetail selectedMovie={selectedMovie} />}
            />
          </Route>
        </Routes>


        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="rating-title">
            <h6>Your Rating</h6> <span>{rating}</span>
          </div>
          <div className="rating-label">
          {[...Array(10)].map((star, index) => {
            const currentRating = index + 1;
            return (
                <label >
                  <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                  />
                  <FaStar
                    className="star"
                    size={30}
                    color={
                      currentRating <= (hoverRatin || rating)
                        ? "#5799EF"
                        : "#0000005b"
                    }
                    onMouseEnter={() => setHoverRating(currentRating)}
                    onMouseLeave={() => setHoverRating(null)}
                  />
                </label>
            );
          })}
          </div>

          <Button onClick={handleRating} className="rate-button">Rate</Button>
        </Modal>
      </BrowserRouter>
    </>
  );
}

export default App;
