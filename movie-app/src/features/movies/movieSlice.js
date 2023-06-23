import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies= createAsyncThunk("movies/fetchAsyncMovies", async()=>{
  const movieText = "Harry";
  const response = await movieApi
  .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
  // .catch((err) => {
  //   console.log(err);
  // });
return (response.data);
})
export const fetchAsyncShows= createAsyncThunk("movies/fetchAsyncShows", async()=>{
  const seriesText = "Friends";
  const response = await movieApi
  .get(`?apiKey=${APIKey}&s=${seriesText}&type=series`)
  // .catch((err) => {
  //   console.log(err);
  // });
return (response.data);
})

export const fetchAsyncMovieOrShowDetails = createAsyncThunk("movies/fetchAsyncMovieOrShowDetails", async(id)=>{
  const response = await movieApi
  .get(`?apiKey=${APIKey}&i=${id}$Plot=full`)
  // .catch((err) => {
  //   console.log(err);
  // });
return (response.data);
})


const initialState = {
  movies: {},
  shows:{},
  selectedMovieOrShow: {}
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
    },
    [fetchAsyncShows.fulfilled]: (state, {payload})=>{
      console.log("fulfilled")
      return{...state, shows: payload}
    }, [fetchAsyncMovieOrShowDetails.fulfilled]: (state, {payload})=>{
      console.log("fulfilled")
      return{...state ,selectedMovieOrShow:payload  }
    },
  }
});
export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows =(state) =>state.movies.shows;
export default movieSlice.reducer;
