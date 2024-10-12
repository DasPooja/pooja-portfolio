import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../../data/projectsData";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <>
      <section id="projects" className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
