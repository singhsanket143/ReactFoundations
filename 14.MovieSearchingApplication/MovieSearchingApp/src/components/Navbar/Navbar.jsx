import { useState } from 'react';
import './Navbar.css';
import useMovieList from '../../hooks/useMovieList';
import useDebounce from '../../hooks/useDebounce';
function Navbar() {
    // const resultListRef = useRef(null);
    const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const {movieList} = useMovieList(searchTerm);
    return (
        <div className="navbar-wrapper">
            <div>Movie Base</div>
            <div className="search-bar">
                <input
                    id="movie-search-input"
                    type="text"
                    onFocus={() => {
                        setIsAutoCompleteVisible(true);
                    }}
                    onBlur={() => {
                        setIsAutoCompleteVisible(false);
                    }}
                    onChange={useDebounce((e) => {
                        setSearchTerm(e.target.value);
                    })}
                    placeholder="what movie you are thinking about..."
                />

                <div id="result-list" style={{display: (isAutoCompleteVisible) ? 'block' : 'none'}}>
                    <div className="autocomplete-result">Auto complete results....{searchTerm}</div>
                    {movieList.length > 0 && 
                        movieList.map(movie => <div key={movie.imdbID} className="autocomplete-result">{movie.Title}</div>
                    )}
                </div>
            </div>
            <div>
                Theme
            </div>
        </div>
    )

}

export default Navbar;