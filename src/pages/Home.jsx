import '../styles/Home.css';
import { useNavigate } from "react-router-dom";
import DanilOuakli from '../assets/DanilOuakli.jpg';
import  Ayamouffok from '../assets/Ayamouffok.jpg';
import  hanaachahbar from '../assets/hanaachahbar.jpg';
import AymenZahzouh from '../assets/Aymenzahzouh.jpg';
import SaadMohamed from '../assets/SaadMohamed.jpg'
export default function Home() {
    const navigator = useNavigate();
    const members = [
        { job: 'AI student', fullname: 'Aya mouffok', pageName: 'Aya-mouffok', image: Ayamouffok},
        { job: 'AI student', fullname: 'Hanaa Chahbar', pageName: 'Hanaa-chahbar', image: hanaachahbar},
        { job: 'AI student', fullname: 'Ilafe Namra', pageName: 'Ilafe-namra-hamdat' },
        { job: 'AI student', fullname: 'Mohamed Saad', pageName: 'Mohamed-alamin-saad', image: SaadMohamed },
        { job: 'AI student', fullname: 'Danil Ouakli', pageName: 'Danil-ouakli', image: DanilOuakli},
        { job: 'AI student', fullname: 'Aymen Zahzouh', pageName: 'Aymen-Zahzouh', image: AymenZahzouh},
    ];

    return (
        <div className="home-container">
            <div className="team-section">Team Section</div>
            <div className="big-title">
                Meet the Team of SE
            </div>
            <div className="Welcome-text">
                Welcome to our team's portfolio website
            </div>
            <div className="team-section">
                {members.map((member, index) => (
                    <div className="card" key={index}>
                        <img src={member.image} alt="profile image" height={120} width={220}/>
                        <div className="specialty">
                            {member.job}
                        </div>
                        <div className="fullname">
                            {member.fullname}
                        </div>
                        <div className="view-details-btn" onClick={() => (navigator("/" + member.pageName))}>
                            see profile
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
