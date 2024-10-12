import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Home.css";

const Home = () => {
  return (
    <section id="home" className="home-container">
      {/* Left Side: Introduction */}
      <div className="home-intro">
        <h1>Hello, I am Pooja</h1>
        <h3>Frontend Developer | React JS</h3>
        <p>
          I am a passionate front-end developer with expertise in React.js. I
          love building interactive and dynamic web applications that provide a
          great user experience. Creating intuitive, responsive, and engaging
          UIs is my strength.
        </p>
        {/* <p>
          I enjoy collaborating with designers and back-end developers to create
          seamless user experiences. I am always eager to learn new technologies
          and improve my skills to stay updated in this fast-paced industry.
        </p> */}
        <div className="home-links">
          <a href="assets/Pooja-Das-Resume.pdf" className="resume-btn" download>
            Get my resume
          </a>
          <a href="mailto:poojaadas20@gmail.com" className="hireme-btn">
            Hire Me!
          </a>
        </div>
        <div className="home-socials">
          <a
            href="https://github.com/DasPooja/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/pooja-das-15422a22a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>
        </div>
      </div>

      {/* Right Side: Floating Picture */}
      <div className="home-picture">
        <img src="assets/home-image.jpg" alt="Tech" className="floating-img" />
      </div>
    </section>
  );
};

export default Home;
