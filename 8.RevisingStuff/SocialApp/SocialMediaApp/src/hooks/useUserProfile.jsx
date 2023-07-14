import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function useUserProfile() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const { userId } = useParams();
    useEffect(() => {
        axios.get(`https://dummyapi.io/data/v1/user/${userId}`, {
            headers: {
                'app-id': import.meta.env.VITE_APP_ID
            }
        })
        .then((response) => {
            console.log(response);
            setUser({...response.data});
            setLoading(false);
        })
    }, []);

    return [user, loading];
}