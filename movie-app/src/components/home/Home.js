import { MovieListing } from "../movieListing/MovieListing";
import { useEffect } from "react";
import movieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const Home = () => {
  const movieText = "Harry";
  const fetchMovies = async () => {
    const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log(err);
      });
    console.log(response);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};
