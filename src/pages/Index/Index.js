import React from "react";
import './Index.css';
const Index = (props) => {
    return(
        <div className="index_container">
            <div className="banner">
                <div className="intro">
                    <h2>Olá sou o</h2>
                    <span>Clovis Antunes</span>
                    <p>Desenvolvedor Front-End</p> 
                </div>
                <div className="profile"/>
            </div>
            <div className="about">

                <h2>Sobre mim</h2>
                <p>{props.text}</p>
            </div>

        </div>
    )
}

export default Index;