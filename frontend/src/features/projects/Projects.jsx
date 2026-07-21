import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ projects }) => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
