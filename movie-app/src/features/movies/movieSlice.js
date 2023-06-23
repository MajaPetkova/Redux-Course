import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies= createAsyncThunk("movies/fetchAsyncMovies", async()=>{
  const movieText = "Friends";
  const response = await movieApi
  .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
  // .catch((err) => {
  //   console.log(err);
  // });
return (response.data);
})

const initialState = {
  movies: {},
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies =action.payload;
    },
  },
  extraReducers:{
    [fetchAsyncMovies.pending]: ()=>{
      console.log("pending")
    },
    [fetchAsyncMovies.fulfilled]: (state, {payload})=>{
      console.log("fulfilled")
      return{...state, movies: payload}
    },
    [fetchAsyncMovies.rejected]: ()=>{
      console.log("rejected")
    }
  }
});
export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
