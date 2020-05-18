import React from "react";

const CommentItem = ({ comment }) => {
  const avatar = comment.avatar ? comment.avatar : null;

  console.log(avatar);

  return (
    <div className="comment-item">
      {/* <div className="comment-item-avatar">{avatar}</div> */}
      <div className="comment-item-content"></div>
      <div className="comment-item-meta"></div>
    </div>
  );
};

export default CommentItem;
