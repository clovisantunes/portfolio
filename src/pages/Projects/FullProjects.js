import React from "react";
import './FullProjects.css';

function FullProjects (props) {
    return (
        <div className="cardFull">
            <a href={props.github} target="blank">
            <div className="coverFull">
            <div className="detailsFull">
                <h3>{props.name}</h3>
            </div>
            <img src={props.img} />
            </div>   
            </a>
        </div>
    )
}

export default FullProjects;