import { useNavigate } from 'react-router-dom';
import './MovieCard.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ReactSVG from '../../assets/react.svg';
function MovieCard({ Title, Year, Type, Poster, id }) {
    const navigator = useNavigate();
    function handleClick() {
        navigator(`/movie/${id}`);
    }

    return (
        <div onClick={handleClick} className='movie-wrapper'>
            <div className='movie-image'>
            <LazyLoadImage
                key={Poster}
                src={Poster} // use normal <img> attributes as props
                placeholderSrc={ReactSVG}
            />
            </div>
            <div className='movie-title'>
                <span>{Title}</span>
            </div>
            <div className='movie-year'>
                <span>Released in: {Year}</span>
            </div>
            <div className='movie-type'>
                <span>Type: {Type}</span>
            </div>
        </div>
    )
}

export default MovieCard;