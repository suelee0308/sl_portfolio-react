import React from "react";
import "../styles/Resume.css";

export default function Resume() {
    
    return(
        <div className="Resume">
            <h1>Resume</h1>

            <div>
                <h2>Programming Languages</h2>
                <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>JavaScript (ES6)</li>
                    <li>GraphQL</li>
                </ul>
            </div>
            <div>
                <h2>Libraries & Frameworks</h2>
                <ul>
                    <li>jQuery</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>React</li>
                </ul>
            </div>
            <div>
                <h2>Databases & Libraries</h2>
                <ul>
                    <li>SQL</li>
                    <li>NoSQL</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                </ul>
            </div>
            <div>
                <h2>Tools & Platforms</h2>
                <ul>
                    <li>GitHub</li>
                    <li>Heroku</li>
                    <li>Netlify</li>
                </ul>
            </div>

        </div>
    );
}