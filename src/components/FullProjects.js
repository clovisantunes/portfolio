import React from "react";
import './styles/FullProjects.css';

function FullProjects (props) {
    return (
        <div className="cardFull">
            <div className="coverFull">
            <div className="detailsFull">
                <h3>{props.name}</h3>
            </div>
            <img src={props.img} />
            </div>   
           
        </div>
    )
}

export default FullProjects;