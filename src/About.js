// About.js
import React from "react";
import Footer from "./Footer";

function About() {
  return (
    <div className="About">
      <h1>About Me</h1>
      <div className="AboutProfilePic">
      </div>
      <h3>Sarthak Mishra</h3>
      <a href="https://www.linkedin.com/in/sarthakmishraa/" target="_blank" rel="noopener noreferrer"><button>LinkedIn</button></a>
      <a href="https://github.com/sarthakmishraa" target="_blank" rel="noopener noreferrer"><button>Github</button></a>
      <a href="http://sarthakmishra.lovestoblog.com/?i=2" target="_blank" rel="noopener noreferrer"><button>Portfolio</button></a>
      <p>I am a grad student pursuing Masters in Computer Science at University at Buffalo, USA. I did my undergrad in India in Computer Science.</p>
      <Footer></Footer>
    </div>
  );
}

export default About;