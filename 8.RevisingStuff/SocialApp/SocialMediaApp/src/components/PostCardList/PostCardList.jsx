import PostCard from "../PostCard";
import PostCardContext from '../../providers/PostsProvider';
import { useContext } from "react";
function PostCardList() {
    // const [posts, setPosts] = useState([]);
    const {posts} = useContext(PostCardContext);

    return ( (posts.length == 0) ? 
                "loading...." : 
                posts.map((post) => <PostCard
                    content={post.text} 
                    image={post.image} 
                    authorFirstName={post.owner.firstName}
                    key={post.id} 
                />)
    );
}

export default PostCardList;