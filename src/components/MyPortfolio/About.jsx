import React from "react";
import SkillIcons from "./SkillIcons";
// import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact } from "react-icons/fa"; // Import your preferred icon library
import {
  SiGithub,
  // SiGit,
  // SiVisualstudiocode,
  // SiNpm,
  // SiRedux,
  // SiVite,
  // SiAntdesign,
  // SiPostman,
  // SiFirebase,
  // SiWebpack,
} from "react-icons/si";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <section id="about" className="about-container">
        <div className="about-intro">
          <h2 className="section-title">About Me</h2>
          <p>
            I am a front-end developer with over two years of professional
            experience in creating robust, user-friendly web applications. My
            expertise lies in React.js, but I also have a strong command over
            JavaScript, HTML, and CSS. I enjoy working with modern libraries and
            frameworks to craft seamless user interfaces.
          </p>
          <p>
            I believe in writing clean, efficient code and thrive in
            collaborative environments where I can continuously learn and
            contribute. Whether it's building scalable applications or
            optimizing performance, I am dedicated to delivering high-quality
            solutions.
          </p>
        </div>
        <div className="vertical-line"></div>
        <div className="about-skills">
          <div className="skills-section">
            <h3>Front End</h3>
            <div className="skills-icons">
              <SkillIcons
                svgPath="/assets/html-5-svgrepo-com.svg"
                altText="html5"
              />
              <SkillIcons
                svgPath="/assets/css-3-svgrepo-com.svg"
                altText="css5"
              />
              <SkillIcons svgPath="/assets/js-svgrepo-com.svg" altText="js" />
              <SkillIcons
                svgPath="/assets/bootstrap-svgrepo-com.svg"
                altText="bootstrap"
              />
              <SkillIcons
                svgPath="/assets/react-svgrepo-com.svg"
                altText="react"
              />
              <SkillIcons
                svgPath="/assets/redux-svgrepo-com.svg"
                altText="redux"
              />
              <SkillIcons
                svgPath="/assets/vite-svgrepo-com.svg"
                altText="vite"
              />
              <SkillIcons
                svgPath="/assets/ant-design-svgrepo-com.svg"
                altText="antd"
              />
              <SkillIcons
                svgPath="/assets/material-ui-svgrepo-com.svg"
                altText="materilaui"
              />
            </div>
          </div>
          <div className="tools-section">
            <h3>Tools</h3>
            <div className="tools-icons">
              <SkillIcons svgPath="/assets/git-svgrepo-com.svg" altText="git" />
              <SiGithub width="40" height="40" />
              <SkillIcons
                svgPath="/assets/gitlab-svgrepo-com.svg"
                altText="gitlab"
              />
              <SkillIcons
                svgPath="/assets/vs-code-svgrepo-com.svg"
                altText="vscode"
              />
              <SkillIcons svgPath="/assets/npm-svgrepo-com.svg" altText="npm" />
              <SkillIcons
                svgPath="/assets/webpack-svgrepo-com.svg"
                altText="webpack"
              />
              <SkillIcons
                svgPath="/assets/postman-icon-svgrepo-com.svg"
                altText="postman"
              />
              <SkillIcons
                svgPath="/assets/firebase-svgrepo-com.svg"
                altText="firebase"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
