import React from "react";
import "../styles/ProjectCard.css"; // We'll create this CSS file next
import { FiArrowRight } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  const { title, description, image, url } = project;

  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={image} alt={`${title} Screenshot`} />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
        >
          <FiArrowRight className="project-card-arrow" />
        </a>
      </div>
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
