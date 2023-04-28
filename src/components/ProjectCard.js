import React from "react";
import './styles/ProjectCard.css';
function ProjectCard (props) {
    return (
        <div className="card">
            <div className="cover">
            <div className="details">
                <h3>{props.name}</h3>
            </div>
            <img src={props.img} />
            </div>   
           
        </div>
    )
}

export default ProjectCard;