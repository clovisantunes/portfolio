import React, { useEffect, useState } from "react";
import "./Projects.css";
import FullProjects from "./FullProjects";
import ProjectCard from "./ProjectCard";
import FullProjectsItems from "./componentsProjects/Fullprojects";
import ProjectsDestaque from "./componentsProjects/Projects";


function ProjectItem(project) {

return(
    <ProjectCard 
    img={project.img}
    name={project.name}
    id={project.id}
    react={project.react}
    html={project.html}
    css={project.css}
    javaScript={project.javaScript}
    api={project.api}
    iconReact={project.icoReact}
    iconhtml={project.icoHtml}
    icoCss={project.icoCss}
    iconjavaScript={project.icoJavaScript}
    />
    )
  }
  function ProjectFull(projectF) {
    return(
    <FullProjects
    img={projectF.img}
    name={projectF.name}
    id={projectF.id}
    
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
