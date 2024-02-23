// VideoPlayer.js
import React from "react";

function VideoPlayer() {
  const videoSource = "https://www.youtube.com/watch?v=W0L6N0gRZBQ";

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