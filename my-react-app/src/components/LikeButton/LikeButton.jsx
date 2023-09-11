import React, { useState } from "react";
import "./LikeButton.css";

function LikeButton() {
  const [count, setCount] = useState(0);

  const handleLikeClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="like-button">
      <button onClick={handleLikeClick}>
        Like <span className="like-count">{count}</span>
      </button>
    </div>
  );
}

export default LikeButton;
