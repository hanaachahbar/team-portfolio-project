import '../styles/Home.css';
import { useNavigate } from "react-router-dom";
import DanilOuakli from '../assets/Danil_Ouakli.jpg';

export default function Home() {
    const navigator = useNavigate();
    const members = [
        { job: 'competence', fullname: 'Aya mouffok', pageName: 'Aya-mouffok'},
        { job: 'competence', fullname: 'Hanaa Chahbar', pageName: 'Hanaa-chahbar' },
        { job: 'competence', fullname: 'Ilafe Namra', pageName: 'Ilafe-namra-hamdat' },
        { job: 'competence', fullname: 'Mohamed Saad', pageName: 'Mohamed-alamin-saad' },
        { job: 'competence', fullname: 'Danil Ouakli', pageName: 'Danil-ouakli', image: DanilOuakli},
        { job: 'competence', fullname: 'Aymen Zahzouh', pageName: 'Aymen-Zahzouh' },
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