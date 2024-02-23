// Home.js
import React from "react";
// import VideoPlayer from './VideoPlayer';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Home() {
  return (
    <div className="Home">
        <h1>SM Security</h1>
        <p>Welcome to SM Sec, a software which gives you video surveillance options.
          Currently this is underconstruction</p>

        <div className="HomeFeature">
          <h4>Real Time Detection using COCOSSD </h4>
          <Link to={"/liveDetect"}>
            <button>Click</button>
          </Link>
        </div>
        <div className="HomeFeature">
          <h4>Image Object Detection using COCOSSD </h4>
          <Link to={"/imgDetect"}>
            <button>Click</button>
          </Link>
        </div>
        
        {/* <VideoPlayer></VideoPlayer> */}
        <Footer></Footer>
    </div>
  );
}

export default Home;