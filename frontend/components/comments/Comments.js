import React, { useState, useEffect } from "react";

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
    if (!cmt) {
      console.log(trackId);
      fetchTrackComments(trackId).then((res) => {
        setCmt(res.comments);
      });
    }
  }, [cmt]);

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
    setBody("");
  };

  return (
    <div className="comments">
      <form className="upload-form" onSubmit={handleSubmit}>
        <div className="error-list big"></div>
        <h1>Comments</h1>
        <label>
          Write a comment
          <br />
          <input type="text" value={body} onChange={handleInput} />
        </label>
        <button>Post Comment</button>
      </form>
    </div>
  );
};
