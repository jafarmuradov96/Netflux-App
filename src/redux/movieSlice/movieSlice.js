import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  movieData: [],
  topRatedMovies: [],
  upcomingMovies: [],
  selectedMovie: null,
  searchValue: "",
  isModalOpen: false,
  rating: 0,
  hoverRating: null,
  selectedMovieID: null,
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
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    setRating(state, action) {
      state.rating = action.payload;
    },
    setHoverRating(state, action) {
      state.hoverRating = action.payload;
    },
    setSelectedMovieID: (state, action) => {
        state.selectedMovieID = action.payload;
    },
  },
});

export const {
  setMovieData,
  setTopRatedMovies,
  setUpcomingMovies,
  setSelectedMovie,
  setSearchValue,
  setIsModalOpen,
  setRating,
  setHoverRating,
  setSelectedMovieID,
} = movieSlice.actions;
export default movieSlice.reducer;
