import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import { ErrorBoundary } from "react-error-boundary";
import React, { Suspense } from 'react';
import ErrorFallback from '../components/ErrorFallback/ErrorFallback';

// Lazy components
const MovieDetails = React.lazy(() => import('../pages/MovieDetails'));

function MainRoutes() {
    return (
        <Routes> 
            {/* routes contain multiple route */}
            <Route path='/' element={<Home />} />
            <Route path='/movie/:id' element={(
                <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
                    <Suspense fallback={<div>loading.......</div>}>
                        <MovieDetails/>
                    </Suspense>
                </ErrorBoundary>
            )} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default MainRoutes;