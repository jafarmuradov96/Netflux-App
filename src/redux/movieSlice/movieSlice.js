import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  movieData: [],
  topRatedMovies: [],
  upcomingMovies: [],
  selectedMovie: null,
  searchValue: "",
  selectedMovieID: null,
  watchlist: [],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovieData: (state, action) => {
      state.movieData = action.payload;
    },
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setWatchlist: (state, action) => {
      state.watchlist = action.payload;
    }

  },
});

export const {
  setMovieData,
  setTopRatedMovies,
  setUpcomingMovies,
  setSelectedMovie,
  setSearchValue,
  setWatchlist
} = movieSlice.actions;
export default movieSlice.reducer;
