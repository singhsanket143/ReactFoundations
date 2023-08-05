import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovieById } from "../apis/omdb";
import MovieCard from "../components/MovieCard/MovieCard";

function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const {id} = useParams();

    async function downloadMovie(){
        const response = await axios.get(searchMovieById(id));
        console.log(response.data);
        setMovie(response.data);
    }

    useEffect(() => {
        downloadMovie();
    }, []);

    return (
        <>
            {movie && <MovieCard 
                        Title={movie.Title} 
                        Year={movie.Year}
                        Type={movie.Type}
                        Poster={movie.Poster} 
                        />
            }
        </>
    )
}

export default MovieDetails;