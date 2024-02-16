// UploadSection.js
import React, { useState } from "react";
import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl"
import * as cocoSSD from "@tensorflow-models/coco-ssd";

function UploadSection() {

  const [imgData, setImgData] = useState(null);

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

  const handleUpload = async (imgData) => {
    const imgElement = document.createElement("img");
    imgElement.src = imgData;

    imgElement.onload = async () => {
      console.log("inside image element onload");
      await detectObjectFromImage(imgElement);
    };

    imgElement.onerror = async (error) => {
      console.log("ERROR: ", error.message);
    };    
  };

  const detectObjectFromImage = async (imgElement) => {
    const model = await cocoSSD.load();
    const predictions = await model.detect(imgElement, 5);
    console.log("Predictions: ", predictions);
  };

  return (
    <div className="UploadSection">
      <div className="ImageContainer">
        {imgData ? <img className="imageDetect" src={imgData} alt="Insert object here"></img> : <h3>Uploaded/detected Image will be shown here</h3>}
      </div>
      <input type="file" onChange={ handleFileChange }></input>
      <button onClick={ handleUpload }>Detect</button>
    </div>
    );
}

export default UploadSection;