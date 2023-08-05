import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetails';
import Error from '../pages/Error';

function MainRoutes() {
    return (
        <Routes> 
            {/* routes contain multiple route */}
            <Route path='/' element={<Home />} />
            <Route path='/movie/:id' element={<MovieDetails/>} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default MainRoutes;