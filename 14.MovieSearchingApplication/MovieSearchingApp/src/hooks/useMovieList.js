import axios from "axios";
import { useEffect, useState } from "react";
import { searchMovie } from "../apis/omdb";

function useMovieList(...args) {
    const [movieList, setMovieList] = useState([]);

    async function downloadDefaultMovies(...args) {
        try {
            const urls = args.map((name) => searchMovie(name));
            const response = await axios.all(urls.map(url => axios.get(url)));
            if(response[0].data.Error) {
                setMovieList([]);
            } else {
                const movies = response.map((movieResponse) => movieResponse.data.Search);
                setMovieList([].concat(...movies));
            }
        } catch(error) {
            console.log("api request failed")
        }
        
    }

    useEffect(() => {
        downloadDefaultMovies(...args);
    }, [...args]);

    return {movieList};
}

export default useMovieList;