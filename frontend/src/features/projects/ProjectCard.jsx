import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      )}
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      )}
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
