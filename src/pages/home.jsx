import React from "react";
import Header from "../components/Header";
import '../styles/home.css';
import softwareImage from '../assets/software.jpg';
import employee_m from '../assets/employee_m.png';
import employee_w from '../assets/employee_w.png';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    function handleClick(name, job, desc, img, email) {
        navigate('/employee', { state: { name, job, desc, img, email } });
        
    }

    return (
        <>
            <Header />

            <div id="main">
                <h1 className="main-heading">Managing your data and website</h1>
                <div className="cards">

                    <div className="card">
                        <h2>We offer web & mobile development solutions</h2>
                        <h3>While building an application or website, the most important thing is doing it with a team dedicated to your success.</h3>
                    </div>
                    <div className="card">
                        <h2>Customer-Centric Approach</h2>
                        <h3>We focus on understanding your needs and tailoring solutions that help you achieve your business goals.</h3>
                    </div>
                    <div className="card">
                        <h2>We have 10+ years of experience</h2>
                        <h3>Experience is key in business, as it makes everything easier.</h3>
                    </div>
                </div>

                <img src={softwareImage} alt="Software Development" className="software-image" />

                <div className="our_team">
                    <h1>Meet Our Team!</h1>
                    <div className="team-members">
                        <div className="member" onClick={() => handleClick("John", "Web Developer", "Team Lead", employee_m, "johndev@mail.com")}>
                            <img src={employee_m} alt="Team Member" className="member-image" />
                            <h4>John</h4>
                            <h5>Web Developer</h5>
                        </div>
                        <div className="member" onClick={() => handleClick("Jane", "Web Developer", "Team Member", employee_w, "janedev@mail.com")}>
                            <img src={employee_w} alt="Team Member" className="member-image" />
                            <h4>Jane</h4>
                            <h5>Web Developer</h5>
                        </div>
                        <div className="member" onClick={() => handleClick("Lesly", "Mobile Developer", "Team Lead", employee_w, "leslydev@mail.com")}>
                            <img src={employee_w} alt="Team Member" className="member-image" />
                            <h4>Lesly</h4>
                            <h5>Mobile Developer</h5>
                        </div>
                        <div className="member" onClick={() => handleClick("Sleys", "UI/UX Designer", "Team Member", employee_w, "sleysdev@mail.com")}>
                            <img src={employee_w} alt="Team Member" className="member-image" />
                            <h4>Sleys</h4>
                            <h5>UI/UX Designer</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
