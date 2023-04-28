import React from "react";
import "./styles/Projects.css";
import ProjectsDestaque from './projects/Projects';
import ProjectCard from "./ProjectCard";
import FullProjects from "./FullProjects";
import FullProjectsItems from "./projects/Fullprojects";
function ProjectItem(project) {
    
    return(
    <ProjectCard 
    img={project.img}
    name={project.id}
    />
    )
  }
  function ProjectFull(projectF) {
    return(
    <FullProjects
    img={projectF.img}
    name={projectF.id}
    />
    )
  }
function Projects() {
  return (
    <div className="projects_container">
      <h1>Projetos</h1>
      <div className="projects_destaque">
        <h2>Destaques</h2>
        <div className="project_card">
            {ProjectsDestaque.map(ProjectItem)}
        </div>
      </div>
      <div className="full_project">
        <h2>Todos Projetos</h2>
      <div className="projectFull_card">
            
                {FullProjectsItems.map(ProjectFull)}
            </div>
      </div>
    </div>
  );
}

export default Projects;
