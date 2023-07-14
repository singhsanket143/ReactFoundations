import Avatar from '@mui/material/Avatar';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
export default function UserDetails() {
  let { id } = useParams();
  useEffect(() => {
    console.log(id);
  }, []);
  return (
    <>
      User id: {id}
     <Avatar
        alt="Remy Sharp"
        src="https://randomuser.me/api/portraits/women/58.jpg"
        sx={{ width: 60, height: 60 }}
      />

    </>
     
  );
}