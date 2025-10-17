import { useNavigate } from "react-router-dom";
import '../styles/HanaaChahbar.css'
import hanaaImg from '../assets/hanaachahbar.jpg';
export default function HanaaChahbar() {
    const navigator  = useNavigate();

    return (
        <div className="container">
            <div className="introduction">
                <div className="arrow-back" onClick={() => navigator(-1)}>
                    <div className="arrow"></div>
                </div>
                <div className="presentation">
                    Hello, I'm Hanaa Chahbar
                </div>
            </div>

            <div className="about-me">
                <div className="title">About me</div>
                <div className="info">
                    <div className="description">
                        I'm Hanaa Chahbar, a third-year Artificial Intelligence student passionate about creating intelligent and data-driven solutions. I have a strong interest in data analysis, optimization algorithms, and web development with React, combining technical skills and creativity to build practical, user-friendly applications. I’m always eager to learn new technologies, work on innovative ideas, and apply AI concepts to solve real-world problems.
                    </div>
                    <img src={hanaaImg} alt="image" height={200} width={180}/>
                </div>
            </div>

            <div className="splitter"></div>

            <div className="skills">
                <div className="skills-title">Skills</div>
                <div className="skills-list">
                    <div className="competence">&bull; React.js, HTML, CSS, JavaScript</div>
                    <div className="competence">&bull; Python (Machine Learning, Data Analysis)</div>
                    <div className="competence">&bull; Algorithms: A*, Greedy, Genetic</div>
                    <div className="competence">&bull; Backend: Node.js, Express, Flask</div>
                    <div className="competence">&bull; Problem-solving and project collaboration</div>
                </div>
            </div>

            <div className="splitter"></div>

            <div className="github">
                <div className="header-github">Github link</div>
 <a href="https://github.com/hanaachahbar" target="_blank" rel="noopener noreferrer">
                    https://github.com/hanaachahbar
                </a>
            </div>
        </div>
    );
}