import React from "react";
import './skills.css';
const Skills = () => {
    return (
        <div className="habilities_container">
            <h1>Habilidades</h1>
            <div className="habilities_card">
                <div className="box" key='1'>
                <p>HTML5</p>
                <img src="https://www.rhuanbello.com/assets/languages/html.svg"/>
                </div>
                <div className="box" key='2'>
                <p>CSS3</p>
                <img src="https://www.rhuanbello.com/assets/languages/css.svg"/>
                </div>
                <div className="box" key='3'>
                <p>JavaScript</p>
                <img src="https://www.rhuanbello.com/assets/languages/javascript.svg"/>
                </div>
                <div className="box" key='4'>
                <p>React.Js</p>
                <img src="https://www.rhuanbello.com/assets/languages/react.svg"/>
                </div>
                <div className="box" key='5'>
                <p>Next.Js</p>
                <img src="https://www.rhuanbello.com/assets/languages/nextjs.svg"/>
                </div>
                <div className="box" key='6'>React.Native</div>
                <div className="box" key='7'>Node.js</div>
                <div className="box" key='8'>Java</div>
                <div className="box" key='9'>Deplhi</div>
                <div className="box" key='10'>SQL</div>
                <div className="box" key='11'>
                <p>TypeScript</p>
                <img src="https://www.rhuanbello.com/assets/languages/typescript.svg"/>
                </div>
                <div className="box" key='12'>
                <p>CSS-in-Js</p>
                <img src="https://www.rhuanbello.com/assets/languages/styledcomponents.svg"/>
                </div>
                <div className="box" key='13'>Scrum</div>
                <div className="box" key='14'>GitHub</div>
                <div className="box" key='15'>Lazarus</div>
            </div>
        </div>
    )
}

export default Skills;