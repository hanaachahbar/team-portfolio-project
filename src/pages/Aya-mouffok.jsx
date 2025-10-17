import { useNavigate } from "react-router-dom";
import '../styles/AyaMouffok.css'
import  Ayamouffok from '../assets/Ayamouffok.jpg'

export default function AyaMouffok() {
    const navigator  = useNavigate();

    return (
        <div className="container">
            <div className="introduction">
                <div className="arrow-back" onClick={() => navigator(-1)}>
                    <div className="arrow"></div>
                </div>
                <div className="presentation">
                    Hello, I'm Aya Mouffok
                </div>
            </div>

            <div className="about-me">
                <div className="title">About me</div>
                <div className="info">
                    <div className="description">
                        I’m a third-year student at the National Higher School of Artificial Intelligence in Sidi Abdellah, Algiers. I’m passionate about artificial intelligence and technology, always eager to learn new things and explore new opportunities. I enjoy combining creativity and logic to build meaningful and innovative projects.
                    </div>
                    <img src={Ayamouffok} alt="image" height={200} width={180}/>
                </div>
            </div>

            <div className="splitter"></div>

            <div className="skills">
                <div className="skills-title">
                    Skills
                </div>
                <div className="skills-list">
                    <div className="competence">&bull; <b>Programming Languages:</b> Python, Java, JavaScript, C++</div>
                    <div className="competence">&bull; <b>Web & Mobile Development:</b> HTML, CSS, Dart</div>
                    <div className="competence">&bull; <b>Frameworks & Technologies:</b> Flutter, React.js, Node.js</div>
                    <div className="competence">&bull; <b> Database Systems:</b> MySQL, MongoDB, Oracle</div>
                    <div className="competence">&bull; <b>Other Skills:</b> Git/GitHub, Problem Solving, UI/UX Design Basics</div>       
                </div>
            </div>

            <div className="splitter"></div>

            <div className="github">
                <div className="header-github">Github link</div>
                <a href="https://github.com/Aya-Mouff" target="blank">https://github.com/Aya-Mouff</a>
            </div>
        </div>
    );
}