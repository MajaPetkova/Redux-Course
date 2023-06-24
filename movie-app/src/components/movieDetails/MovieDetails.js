import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAsyncMovieOrShowDetails, getSelectedMovieOrShow } from "../../features/movies/movieSlice";

export const MovieDetails =()=>{
    const {id} = useParams();
    const dispatch = useDispatch();

    const data= useSelector(getSelectedMovieOrShow)
    console.log(data)

    useEffect(()=>{
     dispatch(fetchAsyncMovieOrShowDetails(id))
    },[dispatch, id])


    return(
        <div className="movie-section">
            <div className="section-left">
                <div className="movie-title">
                    {data.Title}
                </div>
                <div className="movie-rating">
                    <span>IMDB Rating  {data.imdbRating}</span>
                    <span>IMDB Votes  {data.imdbVotes}</span>
                    <span>Runtime  {data.Runtime}</span>
                    <span>Year  {data.Year}</span>
                </div>
                <div className="movie-plot">
                    {data.Plot}
                </div>
                <div className="movie-info">
                    <span>Director: </span>
                    <span>{data.Director}</span>
                </div>
                <div className="movie-info">
                    <span>Stars: </span>
                    <span>{data.Actors}</span>
                </div>
                <div className="movie-info">
                    <span>Genre: </span>
                    <span>{data.Genre}</span>
                </div>
                <div className="movie-info">
                    <span>Languages: </span>
                    <span>{data.Languages}</span>
                </div>
                <div className="movie-info">
                    <span>Awards: </span>
                    <span>{data.Awards}</span>
                </div>
            </div>
            <div className="section-right">
                <img src={data.Poster} alt={data.Title} />
            </div>
        </div>
    )
}