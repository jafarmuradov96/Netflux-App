import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import Main from "./components/Main/Main";
import Watchlist from "./components/watchlist/Watchlist";
import MovieDetail from "./components/Movies/MovieDetail/MovieDetail";
import Movies from "./components/Movies/Movies";
import { useEffect, useState } from "react";
import axios from "axios";
import TopRated from "./pages/top-rated/TopRated";
import Upcoming from "./pages/upcoming/Upcoming";
import { API_URL } from "./services/movie";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsModalOpen,
  setMovieData,
  setSelectedMovie,
  setSelectedMovieID,
  setTopRatedMovies,
  setUpcomingMovies,
} from "./redux/movieSlice/movieSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const dispatch = useDispatch();
  const { movieData, topRatedMovies, upcomingMovies, searchValue } =
    useSelector((state) => state.movies);

  const openModal = (id) => {
    const findIDMovie = movieData.find((movie) => movie.id === id);
    const findIDTopRated = topRatedMovies.find((movie) => movie.id === id);
    const findIDUpcoming = upcomingMovies.find((movie) => movie.id === id);

    if (findIDMovie || findIDTopRated || findIDUpcoming) {
      dispatch(setSelectedMovieID(id));
      dispatch(setIsModalOpen(true));
    }
  };

  const closeModal = () => {
    dispatch(setIsModalOpen(false));
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
        dispatch(setMovieData(moviesResponse.data.results));
        dispatch(setTopRatedMovies(topRatedResponse.data.results));
        dispatch(setUpcomingMovies(upcomingMoviesResponse.data.results));
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
      dispatch(setSelectedMovie(response.data));
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
      dispatch(setMovieData(response.data.results));
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
    setIsShowMenu(false);
  };

  if (loading) {
    return <div className="loading-page">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(movieData, 111111111);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <MainLayout
                handleClickSearch={handleClickSearch}
                isShowMenu={isShowMenu}
                setIsShowMenu={setIsShowMenu}
              />
            }
          >
            <Route
              path="/"
              element={<Main handleMovieClick={handleMovieClick} />}
            />
            <Route
              path="movies"
              element={
                <Movies handleMovieClick={handleMovieClick} loading={loading} />
              }
            />
            <Route
              path="top-rated"
              element={
                <TopRated
                  handleMovieClick={handleMovieClick}
                  loading={loading}
                />
              }
            />
            <Route
              path="upcoming"
              element={
                <Upcoming
                  handleMovieClick={handleMovieClick}
                  loading={loading}
                />
              }
            />
            <Route path="watchlist" element={<Watchlist />} />
            <Route path="/:id" element={<MovieDetail />} />
            <Route path="movies/:id" element={<MovieDetail />} />
            <Route path="top-rated/:id" element={<MovieDetail />} />
            <Route path="upcoming/:id" element={<MovieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
