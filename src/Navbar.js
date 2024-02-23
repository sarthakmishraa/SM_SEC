// Navbar.js
import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-left">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/imgDetect">Image Object Detection</Link>
          <Link to="/liveDetect">Live Detection</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About Sarthak</Link>
          <Link to="/clock">Clock</Link>
        </nav>
      </div>
      <div className="Navbar-right">
        <nav>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
      </div>
    </div>
    );
}

export default Navbar;