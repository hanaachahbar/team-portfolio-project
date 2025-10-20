import { useNavigate } from "react-router-dom";
import '../styles/AymenZahzouh.css';
import AymenPhoto from '../assets/Aymenzahzouh.jpg'; // <-- make sure to add your image in assets folder

export default function AymenZahzouh() {
    const navigator = useNavigate();

    return (
        <div className="container">
            <div className="introduction">
                <div className="arrow-back" onClick={() => navigator(-1)}>
                    <div className="arrow"></div>
                </div>
                <div className="presentation">
                    Hello, I'm Aymen Zahzouh
                </div>
            </div>

            <div className="about-me">
                <div className="title">About me</div>
                <div className="info">
                    <div className="description">
                        &bull; I'm Aymen Zahzouh, a Third-year student at the Higher School 
                        of Artificial Intelligence. I'm passionate about technology, 
                        martial arts, and continuous self-improvement. My interests include 
                        artificial intelligence, software development, and performance optimization 
                        in both code and life. I'm also an athlete competing in Kempo.
                    </div>
                    <img src={AymenPhoto} alt="Aymen Zahzouh" height={200} width={180}/>
                </div>
            </div>

            <div className="splitter"></div>

            <div className="skills">
                <div className="skills-title">Skills</div>
                <div className="skills-list">
                    <div className="competence">&bull; Web development with React and Node.js.</div>
                    <div className="competence">&bull; Mobile development with Flutter (Dart).</div>
                    <div className="competence">&bull; Python for AI and data analysis.</div>
                    <div className="competence">&bull; C, Java, and SQL programming.</div>
                    <div className="competence">&bull; Strong teamwork and leadership skills from competitive sports.</div>
                </div>
            </div>

            <div className="splitter"></div>

            <div className="github">
                <div className="header-github">Github link</div>
                <a href="https://github.com/Aymenzh" target="_blank" rel="noopener noreferrer">
                    https://github.com/Aymenzh
                </a>
            </div>
        </div>
    );
}

