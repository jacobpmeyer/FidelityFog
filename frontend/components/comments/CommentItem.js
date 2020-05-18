import React from "react";

const CommentItem = ({ comment }) => {
  return (
    <div className="comment-item">
      <div className="comment-item-avatar">{comment.user.avatar}</div>
      <div className="comment-item-content"></div>
      <div className="comment-item-meta"></div>
    </div>
  );
};

export default CommentItem;
