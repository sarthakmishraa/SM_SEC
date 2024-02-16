// VideoPlayer.js
import React from "react";

function VideoPlayer() {
  const videoSource = "https://www.youtube.com/watch?v=6RrEQJNZwPQ&list=RDEMLbwywICAYOlC2vOj5cPYjQ&index=9&pp=8AUB";

  return (
    <div className="VideoPlayer">
      <video controls width="100%">
        <source src={ videoSource } type="video/mp4"></source>
        Your browser does not support video tag
      </video>
    </div>
    );
}

export default VideoPlayer;