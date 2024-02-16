// Home.js
import React, { useState, useRef } from "react";
import UploadSection from './UploadSection';
import VideoPlayer from './VideoPlayer';
import RealTimeDetection from './RealTimeDetection';
import Footer from './Footer';

function Home() {
  return (
    <div className="Home">
        <h1>SM Security</h1>
        <p>Welcome to SM Sec, a software which gives you video surveillance options.
          Currently this is underconstruction</p>
        
        <RealTimeDetection></RealTimeDetection>
        <UploadSection></UploadSection>
        <VideoPlayer></VideoPlayer>
        <Footer></Footer>
    </div>
  );
}

export default Home;