// RealTimeDetection.js
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
// import "@tensorflow/tfjs-backend-cpu";
// import "@tensorflow/tfjs-backend-webgl"
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
      setPredictions(["Predictions: " + predictions[0].class + " Score: " + (predictions[0].score * 100).toFixed(2) + "%"]);
    }
  }

  return (
    <div className="RealTimeDetection">
      <button onClick={handleCameraClick}>{isCameraActive ? "Disable Cam" : "Enable Cam"}</button>
      {isCameraActive && <h2>{predictions.length !== 0 ? predictions : "Detecting..."}</h2>}
      {isCameraActive && <Webcam ref={webCamRef} mirrored={true} height={480} width={640} onUserMedia={continuousDetection} onPlay={() => continuousDetection}></Webcam>}
    </div>
    );
}

export default RealTimeDetection;