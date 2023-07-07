import React, { useState } from 'react';
import '../CSS/Tweet.css';
import LikesAndTimestamp from './LikesAndTimestamp';

// const MemoisedLikedAndTimestamp = React.memo(LikesAndTimestamp);
function Tweet({ tweetId, content, likeCount, createdAt, onEdit }) {
    const [isEditting, setIsEditting] = useState(false);

    return (
        <div className="tweet-wrapper">
            <div className="tweet-edit-wrapper">
                <div className="tweet-content">
                    {(isEditting) ? (
                        <input 
                            type="text" 
                            value={content} 
                            onChange={(e) => {
                                onEdit({
                                    id: tweetId,
                                    content: e.target.value,
                                    likeCount: likeCount,
                                    createdAt: new Date()
                                })
                            }}  
                        />
                    ) : content}
                </div>
                <div className="edit-tweet">
                    <button onClick={() => setIsEditting(!isEditting)}>
                        {(isEditting) ? 'Save' : 'Edit'}
                    </button>
                </div>
            </div>
            
            <LikesAndTimestamp likeCount={likeCount} createdAt={createdAt} />
            
        </div>
    )
}

// export default Tweet;
export default React.memo(Tweet);