import TweetList from './TweetList';
import AddTweet from './AddTweet';
import { useState, useCallback, memo } from 'react';
import { TweetContext } from '../context/tweetContext';
const initialDymmyTweets = [
    { id: 0, content: 'we have a new twitter called as threads', likeCount: 3, createdAt: new Date()},
    { id: 1, content: 'What should we post ??', likeCount: 4, createdAt: new Date()},
    { id: 2, content: 'what is up with tech community ?', likeCount: 2, createdAt: new Date()}
  ];

// const MemoisedAddTweet = memo(AddTweet);

function Twitter() {
    const [tweets, setTweets] = useState(initialDymmyTweets);

    const handleEditTweet = useCallback((tweet) => { // this incoming tweet is the updated tweet
        setTweets(tweets => 
            tweets.map((currentTweet) => {
                if(currentTweet.id === tweet.id) {
                    return tweet;
                } else {
                    return currentTweet;
                }
            })
        )
    }, []);

    // const handleEditTweet = (tweet) => { // this incoming tweet is the updated tweet
    //     setTweets(tweets => 
    //         tweets.map((currentTweet) => {
    //             if(currentTweet.id === tweet.id) {
    //                 return tweet;
    //             } else {
    //                 return currentTweet;
    //             }
    //         })
    //     )
    // };

    const sortTweets = useCallback(() => {
        console.log(tweets);
        tweets.sort((t1, t2) => t2.createdAt.getTime() - t1.createdAt.getTime());
        setTweets(tweets => [...tweets]);
    }, [tweets]);


    return (
        <>
        <TweetContext.Provider value={{tweets, setTweets}} >
            <AddTweet/>
            <button onClick={sortTweets}>
                Sort Tweet By CreatedAt
            </button>
            <TweetList tweets={tweets} onEditTweet={handleEditTweet} />
        </TweetContext.Provider>
        </>
      );

}

export default Twitter;