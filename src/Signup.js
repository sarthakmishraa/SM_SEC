// Signup.js
import React from "react";
import Footer from './Footer';
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="Signup">
      <h1>Create your account</h1>
      <input type="text" placeholder="Email"></input>
      <input type="password" placeholder="Password"></input>
      <button>Continue</button>
      <h2>Already have an account ?</h2><Link className="Link-style" to="/login">Log in</Link>
      <Footer></Footer>
    </div>
    );
}

export default Signup;