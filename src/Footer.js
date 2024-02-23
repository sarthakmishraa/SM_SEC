// Footer.js
import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <h1>Connect with us</h1>
      <div className="FooterComponents">
        <div className="FooterCompanyDetails">
          <h2>SM Security</h2>
          <p>This is a web application which uses yolo (you only look once) architecture to detect objects in image/videos.</p>
        </div>
        <div className="FooterLinks">
          <h2>Other Projects</h2>
          <ul>
            <li><a href="https://github.com/sarthakmishraa/Capstone-Project-MCalm" target="_blank" rel="noreferrer">MCalm</a></li>
            <li><a href="https://github.com/sarthakmishraa/age_detection" target="_blank" rel="noreferrer">Age Detection</a></li>
            <li><a href="https://github.com/sarthakmishraa/pothole_detection" target="_blank" rel="noreferrer">Pothole Detection</a></li>
            <li><a href="https://github.com/sarthakmishraa/bike_rental_predictor" target="_blank" rel="noreferrer">Bike Rental Predictor</a></li>
          </ul>
        </div>
        <div className="FooterContactInfo">
        <h2>Contact</h2>
          <ul>
            <li>Buffalo, NY 14214, US</li>
            <li><a href="mailto:mishra23@buffalo.edu" target="_blank" rel="noreferrer">mishra23@buffalo.edu</a></li>
            <li>(716)-936-XXXX</li>
          </ul>
        </div>
      </div>
      <div className="FooterBottomElement">
          <h2>&#169; 2024 Copyright: SM Security</h2>
      </div>
    </div>
  );
}

export default Footer;