import React from "react";
import './ProjectCard.css';





function ProjectCard (props) {
    return (
        <div className="card"   id={props.id}>
           <div className="img">
                <img src={props.img} /> 
            </div> 
            <div className="details">
                <h3>{props.name}</h3>
                <div className="tecnology">
                    <h4>Tecnologias: </h4>
                    <h4>{props.react}</h4>
                    <h4>{props.html}</h4>
                    <h4>{props.css}</h4>
                    <h4>{props.javaScript}</h4>
                    <h4>{props.api}</h4>
                </div>
                <div className="icoContainer">
                    <div className="icoImg">
                        <img src={props.iconReact} />
                        <img src={props.iconhtml} />
                        <img src={props.icoCss} />
                        <img src={props.iconjavaScript} />
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default ProjectCard;