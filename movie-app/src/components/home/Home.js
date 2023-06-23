import { MovieListing } from "../movieListing/MovieListing";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { addMovies, fetchAsyncMovies } from "../../features/movies/movieSlice";

export const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    // const fetchMovies = async () => {
    //   const response = await movieApi
    //     .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    //     .catch((err) => {
    //       console.log(err);
    //     });
    //   dispatch(addMovies(response.data));
    // };
    // fetchMovies();
    dispatch(fetchAsyncMovies())
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};
