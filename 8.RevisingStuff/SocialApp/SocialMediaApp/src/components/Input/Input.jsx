import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState, useContext } from 'react';
import axios from 'axios';
import LoadingButton from '@mui/lab/LoadingButton';
import PostCardContext from '../../providers/PostsProvider';

function Input() {
    const [postText, setPostText] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const {posts, setPosts} = useContext(PostCardContext);
    async function createPost() {
        console.log(posts);
        setLoading(true);
        axios.post("https://dummyapi.io/data/v1/post/create", 
        {
            owner: '60d0fe4f5311236168a109ca',
            text: postText,
            image: imageUrl,
            likes: 0,
            publishDate: new Date()
        },
        {
            headers: {'app-id': import.meta.env.VITE_APP_ID}
        }
        )
        .then(response => {
            console.log(response.data);
            setPosts([response.data, ...posts])
            setLoading(false);
            setPostText("");
            setImageUrl("");
        })
    }

    return (
        <Box sx={{mt: '1rem'}}>
            <TextField 
                fullWidth 
                id="outlined-basic" 
                label="Your next post..." 
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                variant="outlined" />

            <TextField 
                sx={{ mt: '1rem', mb: '1rem'}} 
                fullWidth 
                id="outlined-basic" 
                label="Image for your post..." 
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                variant="outlined" />

            {
                (!loading) ? <Button loading variant="contained" onClick={createPost}>Submit</Button> : <LoadingButton loading variant="outlined">Submit</LoadingButton>
            }
            
        </Box>
    )
}

export default Input;