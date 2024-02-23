import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movieSlice/movieSlice'

export const store = configureStore({
    reducer: {
        movies: movieReducer,
    }
})