import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  movieData: [],
  topRatedMovies: [],
  upcomingMovies: [],
  watchlist: [],
  selectedMovie: null,
  searchValue: "",
  selectedMovieID: null,
  loading: true,
  error: null,
  isShowMenu: false,
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
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsShowMenu: (state, action) => {
      state.isShowMenu = action.payload;
    }

  },
});

export const {
  setMovieData,
  setTopRatedMovies,
  setUpcomingMovies,
  setSelectedMovie,
  setSearchValue,
  setWatchlist,
  setLoading,
  setError,
  setIsShowMenu,
} = movieSlice.actions;
export default movieSlice.reducer;
