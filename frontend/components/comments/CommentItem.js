import React from "react";

const CommentItem = ({ comment }) => {
  let avatar = null;
  if (comment.avatar) {
    avatar = <img src={`${comment.avatar}`} />;
  }

  let dateDif = Date.now() - new Date(comment.createdAt);

  let daysAgo = Math.floor(dateDif / (60 * 60 * 24 * 1000));

  if (isNaN(daysAgo)) daysAgo = 0;

  console.log(avatar);

  return (
    <div className="comment">
      <div className="comment-avatar">{avatar}</div>
      <div className="comment-wrapper">
        <div className="comment-username">{comment.username}</div>
        <div className="comment-content">{comment.body}</div>
      </div>
      <div className="comment-meta">{daysAgo} days ago</div>
    </div>
  );
};

export default CommentItem;
