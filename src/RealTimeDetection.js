// RealTimeDetection.js
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import Footer from './Footer';
import * as cocoSSD from "@tensorflow-models/coco-ssd";

function RealTimeDetection() {

  const webCamRef = useRef(null);

  const [isCameraActive, setIsCameraActive] = useState(false);
  const [predictions, setPredictions] = useState([]);

  const handleCameraClick = async () => {
    setIsCameraActive(!isCameraActive);
  };

  const continuousDetection = async() => {
    while(isCameraActive) {
      await handleDetectFromVideo();
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  const handleDetectFromVideo = async () => {
    // if(webCamRef.current && webCamRef.current.video.readyState === 4){
    //   const video = webCamRef.current.video;
    //   await detectObjectFromVideo(video);
    // }

    if(webCamRef.current && isCameraActive){
      const video = webCamRef.current.video;
      if(webCamRef.current.video.videoWidth > 0 && webCamRef.current.video.videoHeight > 0) {
        await detectObjectFromVideo(video);
      }
    }
  };

  const detectObjectFromVideo = async (video) => {
    const model = await cocoSSD.load();
    const predictions = await model.detect(video, 5);
    if(predictions.length !== 0) {
      setPredictions(predictions);
    }
  }

  return (
    <div className="RealTimeDetection">
      <div className="Webcam">
        <h3>Real Time Object Detection</h3>
      
        <button className="WebcamButton" onClick={handleCameraClick}>{isCameraActive ? "Disable Cam" : "Enable Cam"}</button>
      
        <div className="WebcamContainer">
          {isCameraActive ? <Webcam ref={webCamRef} mirrored={true} height={480} width={640} onUserMedia={continuousDetection} onPlay={() => continuousDetection}></Webcam> : <h3>Uploaded/detected live feed will be shown here</h3>}
        </div>

        {isCameraActive && <h2>{predictions.length !== 0 ? <h3>
        No of classes detected: {predictions.length} <br/> {predictions.map(detection => <div>{detection.class} {(detection.score).toFixed(2)*100}%</div>)}
        </h3> : "Detecting..."}</h2>}
      
      </div>
      <Footer></Footer>
    </div>
    );
}

export default RealTimeDetection;