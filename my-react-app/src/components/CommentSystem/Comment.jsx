import React from "react";

function Comment({ username, commentText }) {
  return (
    <div className="comment">
      <strong>{username}</strong>: {commentText}
    </div>
  );
}

export default Comment;
