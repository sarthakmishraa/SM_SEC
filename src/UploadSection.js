// UploadSection.js
import React, { useState } from "react";
import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl"
import * as cocoSSD from "@tensorflow-models/coco-ssd";
import Footer from './Footer';

function UploadSection() {

  const [imgData, setImgData] = useState(null);
  const [results, setResults] = useState([]);

  const readImage = (file) => {
    return new Promise((rs, rj) => {
      const fileReader = new FileReader();
      fileReader.onload = () => rs(fileReader.result);
      fileReader.onerror = () => rs(fileReader.error);
      fileReader.readAsDataURL(file);
    })
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const imgData = await readImage(file);
    setImgData(imgData);
  };

  const handleUpload = async () => {
    const imgElement = document.createElement("img");
    imgElement.src = imgData;

    imgElement.onload = async () => {
      const result = await detectObjectFromImage(imgElement);
      setResults(result);
    };

    imgElement.onerror = async (error) => {
      console.log("ERROR: ", error.message);
    };
  };

  const detectObjectFromImage = async (imgElement) => {
    const model = await cocoSSD.load();
    const predictions = await model.detect(imgElement, 5);
    console.log("Predictions: ", predictions);
    return predictions;
  };

  return (
    <div className="UploadSection">
      <div className="ImageDetection">
        <h3>Upload an image for object detection</h3>
        <div className="ImageContainer">
          {imgData ? <img className="imageDetect" src={imgData} alt="Insert object here"></img> : <h3>Uploaded/detected Image will be shown here</h3>}
        </div>
        <br/>
        <input type="file" onChange={ handleFileChange }></input>
        <br/>
        <button onClick={ handleUpload }>Detect</button>
        <h3>
        No of classes detected: {results.length} <br/> {results.map(detection => <div>{detection.class} {(detection.score).toFixed(2)*100}%</div>)}
        </h3>
      </div>
      <Footer></Footer>
    </div>
    );
}

export default UploadSection;