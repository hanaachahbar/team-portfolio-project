import { useNavigate } from "react-router-dom";
import '../styles/MohamedSaad.css'
import SaadMohamed from '../assets/SaadMohamed.jpg'

export default function MohamedAlaminSaad() {
    const navigator  = useNavigate();
    return (
        <div className="container">
            <div className="introduction">
                <div className="arrow-back" onClick={() => navigator(-1)}>
                    <div className="arrow"></div>
                </div>
                <div className="presentation">
                    Hello, I'm Saad Mohamed Al Amine
                </div>
            </div>

            <div className="about-me">
                <div className="title">About Me</div>
                <div className="info">
                    <div className="description">
                        &bull; I'm Saad Mohamed Al Amine, and I’m a third-year student at the National School of Artificial Intelligence 
                        (ENSIA) in Sidi Abdellah, Algiers. Originally from Maghnia, Tlemcen, I have a strong passion for artificial intelligence,
                        with particular interest in data science and computer science. Alongside my academic journey, I’ve developed solid expertise
                        in mobile and web development, covering both frontend and backend technologies. I’m also proficient in a variety of 
                        programming languages and modern frameworks, which allows me to build efficient and innovative software solutions.
                    </div>
                    <img src={SaadMohamed} alt="image" height={200} width={180}/>
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
                    <div className="competence">&bull; <b>Frameworks & Technologies:</b> Flutter, React.js, Node.js, Flask</div>
                    <div className="competence">&bull; <b> Database Systems:</b> MySQL, Oracle</div>
                    <div className="competence">&bull; <b>Other Skills:</b> Git/GitHub, Problem Solving, UI/UX Design Basics</div>
                </div>
            </div>

            <div className="splitter"></div>

            <div className="github">
                <div className="header-github">Github link</div>
                <a href="https://github.com/Saad-Mohamed-Al-Amine">https://github.com/Saad-Mohamed-Al-Amine</a>
            </div>
        </div>
    );
}