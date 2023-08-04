import './MovieCard.css';
function MovieCard({ Title, Year, Type, Poster }) {
    return (
        <div className='movie-wrapper'>
            <div className='movie-image'>
                <img src={Poster} />
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