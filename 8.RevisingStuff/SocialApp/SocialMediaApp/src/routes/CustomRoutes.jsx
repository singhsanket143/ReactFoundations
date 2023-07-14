import { Routes, Route } from 'react-router-dom';
import UserProfileDetails from '../components/UserDetails/UserProfileDetails.jsx';
import SocialApp from '../components/SocialApp.jsx';
export default function CustomRoutes() {
    return (
        <Routes>
            <Route path="/"  element={ <SocialApp /> }/>
            <Route path="/user/:userId" element={ <UserProfileDetails /> } />
        </Routes>
    )
}