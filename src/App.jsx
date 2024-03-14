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
  setError,
  setIsShowMenu,
  setLoading,
  setMovieData,
  setSelectedMovie,
  setTopRatedMovies,
  setUpcomingMovies,
  setWatchlist,
} from "./redux/movieSlice/movieSlice";

function App() {
  const dispatch = useDispatch();
  const { searchValue, watchlist, loading, error } = useSelector(
    (state) => state.movies
  );




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
        dispatch(setError(error));
      } finally {
        dispatch(setLoading(false));
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
    dispatch(setIsShowMenu(false));
  };



  useEffect(() => {
    const storedWatchlist = localStorage.getItem("watchlist");
    if (storedWatchlist) {
      dispatch(setWatchlist(JSON.parse(storedWatchlist)));
    }
  }, [dispatch]);




  // const handleWatchlistClick = (movie) => {
  //   const isInWatchlist = watchlist.some((item) => item.id === movie.id);

  //   if (isInWatchlist) {
  //     const updatedWatchlist = watchlist.filter((item) => item.id !== movie.id);
  //     dispatch(setWatchlist(updatedWatchlist));
  //   } else {
  //     dispatch(setWatchlist([...watchlist, movie]));
  //   }
  // };
  const handleWatchlistClick = (movie) => {
    const isInWatchlist = watchlist.some((item) => item.id === movie.id);
  
    if (isInWatchlist) {
      const updatedWatchlist = watchlist.filter((item) => item.id !== movie.id);
      dispatch(setWatchlist(updatedWatchlist));
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    } else {
      dispatch(setWatchlist([...watchlist, movie]));
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    }
  
    
  };

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);


  
  if (loading) {
    return <div className="loading-page">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout handleClickSearch={handleClickSearch} />}>
            <Route
              path="/"
              element={
                <Main
                  handleMovieClick={handleMovieClick}
                  handleWatchlistClick={handleWatchlistClick}
                />
              }
            />
            <Route
              path="movies"
              element={
                <Movies
                  handleMovieClick={handleMovieClick}
                  handleWatchlistClick={handleWatchlistClick}
                />
              }
            />
            <Route
              path="top-rated"
              element={
                <TopRated
                  handleMovieClick={handleMovieClick}
                  handleWatchlistClick={handleWatchlistClick}
                />
              }
            />
            <Route
              path="upcoming"
              element={
                <Upcoming
                  handleMovieClick={handleMovieClick}
                  handleWatchlistClick={handleWatchlistClick}
                />
              }
            />
            <Route
              path="watchlist"
              element={
                <Watchlist
                  handleMovieClick={handleMovieClick}
                  handleWatchlistClick={handleWatchlistClick}
                />
              }
            />
            <Route
              path="/:id"
              element={
                <MovieDetail handleWatchlistClick={handleWatchlistClick} />
              }
            />
            <Route
              path="movies/:id"
              element={
                <MovieDetail handleWatchlistClick={handleWatchlistClick} />
              }
            />
            <Route
              path="top-rated/:id"
              element={
                <MovieDetail handleWatchlistClick={handleWatchlistClick} />
              }
            />
            <Route
              path="upcoming/:id"
              element={
                <MovieDetail handleWatchlistClick={handleWatchlistClick} />
              }
            />
            <Route
              path="watchlist/:id"
              element={
                <MovieDetail handleWatchlistClick={handleWatchlistClick} />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
