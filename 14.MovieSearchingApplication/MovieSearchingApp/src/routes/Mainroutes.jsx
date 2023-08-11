import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import React, { Suspense } from 'react';

// Lazy components
const MovieDetails = React.lazy(() => import('../pages/MovieDetails'));

function MainRoutes() {
    return (
        <Routes> 
            {/* routes contain multiple route */}
            <Route path='/' element={<Home />} />
            <Route path='/movie/:id' element={(
                <Suspense fallback={<div>loading.......</div>}>
                    <MovieDetails/>
                </Suspense>
            )} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default MainRoutes;