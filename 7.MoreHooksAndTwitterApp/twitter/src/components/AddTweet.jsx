import { useState, useContext } from "react";
import { TweetContext } from "../context/tweetContext";
function AddTweet() {
    const [text, setText] = useState("");
    const { tweets, setTweets } = useContext(TweetContext);
    return (
        <>
            <input
                placeholder="Add new tweet...."
                value={text}
                onChange={ (e) => setText(e.target.value) }
            />
            <button onClick={ () => {
                 let nextId = (tweets.length > 0) ? tweets[tweets.length - 1].id+1 : 0;
                 setTweets([...tweets, {
                     content: text,
                     likeCount: Math.floor(Math.random()*10), // this is a random like count,
                     id: nextId,
                     createdAt: new Date()
                 }]);
                setText('');
            }}>
                Tweet !!
            </button>
        </>
    );
}

export default AddTweet;