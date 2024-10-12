import "../styles/Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Pooja Das. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          {/* <a href="#contact">Contact</a> */}
        </div>
        <div className="social-icons">
          <a
            href="https://github.com/DasPooja/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icon" />
          </a>
          <a
            href="https://linkedin.com/in/pooja-das-15422a22a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>
          Wanna Hire Me?<a href="mailto:poojaadas20@gmail.com">Mail</a>
          {/* Add more social icons here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
