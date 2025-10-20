import { useNavigate } from "react-router-dom";
import '../styles/HanaaChahbar.css';
import Ilafeimg from '../assets/IlafePic.jpg';

export default function IlafeNamiraHamdat() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="introduction">
                <div className="arrow-back" onClick={() => navigate(-1)}>
                    <div className="arrow"></div>
                </div>
                <div className="presentation">
                    Hello, I'm Ilafe Namira Hamdat 
                </div>
            </div>

            <div className="about-me">
                <div className="title">About me</div>
                <div className="info">
                    <div className="description">
                        I’m Ilafe Namira Hamdat, a third-year Artificial Intelligence student with a strong passion for building intelligent, impactful, and user-centered digital solutions.
                        I enjoy exploring the intersection of AI, data science, and web development — transforming complex data into actionable insights and smart applications. My interests include machine learning, optimization, and modern web technologies like React. I’m driven by curiosity, creativity, and a desire to apply AI to real-world challenges that make technology more intuitive and accessible.
                    </div>
                    <img src={Ilafeimg} alt="Ilafee Namira Hamdat profile" height={200} width={180}/>
                </div>
            </div>

            <div className="splitter"></div>

            <div className="skills">
                <div className="skills-title">Skills</div>
                <div className="skills-list">
                    <div className="competence">&bull; <strong>Front-End Development:</strong> React.js, HTML, CSS, JavaScript — building responsive, user-friendly interfaces</div>
                    <div className="competence">&bull; <strong>Back-End & APIs:</strong> Node.js, Express, Flask — developing RESTful and AI-driven web services</div>
                    <div className="competence">&bull; <strong>Python for AI & Data:</strong> Machine Learning, Data Analysis, Pandas, NumPy, Scikit-learn</div>
                    <div className="competence">&bull; <strong>Artificial Intelligence:</strong> Search Algorithms (A*, Greedy, Genetic, Beam Search), FOL Inference, Optimization</div>
                    <div className="competence">&bull; <strong>Computer Systems:</strong> RISC-V pipelining, hazard handling, and performance optimization</div>
                    <div className="competence">&bull; <strong>IoT & Smart Systems:</strong> Sensor-based automation, data acquisition, and real-time monitoring</div>
                    <div className="competence"><strong> Experience:</strong>
                        <ul>
                            <li> <strong>Cosider Challenge 2025</strong> — Designed an AI-powered aquaculture management system for smart fish pond monitoring.</li>
                            <li> <strong>ASI Startup Analysis Hackathon</strong> — Built a two-phase AI web platform for analyzing business plan PDFs, generating intelligent feedback, and automating startup management.</li>
                            <li> Participated in multiple AI and data-focused hackathons emphasizing innovation, teamwork, and real-world problem-solving.</li>
                        </ul>
                    </div>
                    <div className="competence">&bull; <strong>Soft Skills:</strong> Problem-solving, teamwork, project collaboration, and creative innovation</div>
                </div>
            </div>

            <div className="splitter"></div>

            <div className="github">
                <div className="header-github">Github link</div>
                <a href="https://github.com/ilafe30" target="_blank" rel="noopener noreferrer">
                    https://github.com/ilafe30
                </a>
            </div>
        </div>
    );
}
