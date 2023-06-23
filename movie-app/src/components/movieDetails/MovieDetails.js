import { useParams } from "react-router-dom"

export const MovieDetails =()=>{
    const {imdbID} = useParams();
    
    return(
        <div>Movie Details</div>
    )
}