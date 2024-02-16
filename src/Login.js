// Login.js
import React from "react";
import Footer from './Footer';
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="Login">
      <h1>Welcome back</h1>
      <input type="text" placeholder="Email"></input>
      <input type="password" placeholder="Password"></input>
      <button>Login</button>
      <h2>Don't have an account ?</h2><Link className="Link-style" to="/signup">Sign up</Link>
      <Footer></Footer>
    </div>
    );
}

export default Login;