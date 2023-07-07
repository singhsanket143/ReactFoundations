import React from "react";

function LikesAndTimestamp({likeCount, createdAt}) {
    return (
        <div className="like-createdAt-wrapper">
                <div className="likes">
                    {likeCount} likes
                </div>
                <div className="created-at">
                    <b>Tweeted at</b> {createdAt}
                </div>
        </div>
    );
}
// export default LikesAndTimestamp;

export default React.memo(LikesAndTimestamp);