import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// CSS import
import './Navbar.css';

// Context import
import ThemeContext from '../../context/ThemeContext';

// Component import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import useMovieList from '../../hooks/useMovieList';
import useDebounce from '../../hooks/useDebounce';

function Navbar() {
    // const resultListRef = useRef(null);
    const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const {movieList} = useMovieList(searchTerm);
    const navigator = useNavigate();

    const {theme, setTheme} = useContext(ThemeContext);

    function updateTheme() {
        if(theme == 'dark') {
            setTheme('light');
            localStorage.setItem('app-theme', 'light');
        } else {
            setTheme('dark');
            localStorage.setItem('app-theme', 'dark');
        }
    }

    function handleAutoCompleteClick(e, movieImdbId) {
        navigator(`/movie/${movieImdbId}`);
    }

    return (
        <div className="navbar-wrapper">
            <div className="movie-base-title"><Link to="/">Movie Base</Link></div>
            <div className="search-bar">
                <input
                    id="movie-search-input"
                    type="text"
                    onFocus={() => {
                        setIsAutoCompleteVisible(true);
                    }}
                    onBlur={(e) => {
                        console.log(e.target);
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
                        movieList.map(movie => (
                        <div 
                            onMouseDown={(e) => handleAutoCompleteClick(e, movie.imdbID)} 
                            key={movie.imdbID}
                            className="autocomplete-result">
                                {movie.Title}
                        </div>
                    ))}
                </div>
            </div>
            <div onClick={updateTheme}>
                <FontAwesomeIcon className='theme-icon' icon={(theme == 'dark') ? faSun : faMoon} />
            </div>
        </div>
    )

}

export default Navbar;