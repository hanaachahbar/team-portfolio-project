import { useNavigate } from "react-router-dom";
import '../styles/DanilOuakli.css'

export default function DanilOuakli() {
    const navigator  = useNavigate();
    return (
        <div className="container">
            <div className="introduction">
                <div className="arrow-back" onClick={() => navigator(-1)}>
                    <div className="arrow"></div>
                </div>
                <div className="presentation">
                    Hello, I'm Danil Ouakli
                </div>
            </div>

            <div className="about-me">
                <div className="title">About me</div>
                <div className="info">
                    <div className="description">
                        &bull; I'm Danil Ouakli, a third-year student at the National School of 
                        Artificial Intelligence in Sidi Abdellah, Algiers.
                        I'm passionate about artificial intelligence, particularly in data science and computer science. 
                        In addition, I specialize in mobile and web development, covering both frontend and backend 
                        technologies. I'm also proficient in a wide range of programming languages and modern frameworks.
                    </div>
                    <img src="" alt="image" height={200} width={180}/>
                </div>
            </div>

            <div className="splitter"></div>

            <div className="skills">
                <div className="skills-title">
                    Skills
                </div>
                <div className="skills-list">
                    <div className="competence">&bull; React framework.</div>
                    <div className="competence">&bull; python, data analysis.</div>
                    <div className="competence">&bull; html, css, javascript.</div>
                    <div className="competence">&bull; mobile development with flutter dart.</div>
                    <div className="competence">&bull; React Native for mobile development.</div>
                </div>
            </div>

            <div className="splitter"></div>

            <div className="github">
                <div className="header-github">Github link</div>
                <a href="https://github.com/danil-okl">https://github.com/danil-okl</a>
            </div>
        </div>
    );
}