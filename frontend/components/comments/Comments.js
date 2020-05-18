import React, { useState, useEffect } from "react";
import CommentItem from "./CommentItem";

export default ({
  trackId,
  currentUser,
  comments,
  fetchTrackComments,
  createComment,
}) => {
  const [body, setBody] = useState("");
  const [cmt, setCmt] = useState(null);

  useEffect(() => {
    if (!comments.length) {
      fetchTrackComments(trackId);
    }
  });

  const handleInput = (e) => {
    e.preventDefault();
    setBody(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      track_id: trackId,
      body,
    };
    createComment(comment);
    fetchTrackComments(trackId);
    setBody("");
  };

  const commentsList = comments.map((comment) => (
    <CommentItem key={comment.id} comment={comment} />
  ));

  return (
    <div className="comments">
      <div className="error-list big"></div>
      <div className="comment-form-wrapper">
        <div className="comment-form-user-avatar"></div>
        <form className="comment-form" onSubmit={handleSubmit}>
          <input
            className="comment-input"
            type="text"
            value={body}
            onChange={handleInput}
            placeholder="Write a comment"
          />
        </form>
      </div>
      <div className="comments-list">{commentsList}</div>
    </div>
  );
};
