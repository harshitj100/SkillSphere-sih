import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header1 from "./screen/Header1";
import img from "./assets/homepic.jpg";

function Coverpage() {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate('/home');
    };

    return (
        <div>

            <Header1/>

            <div className="start-grid">
                <div className="item-grid item1"><img src={img}/></div>
                <div className="item-grid item2"><h1
                    style={{textAlign: "center", fontSize: "5rem", color: "#1A90E4", fontFamily: "montserrat"}}>Welcome
                    to</h1><h1 style={{
                    textAlign: "center",
                    fontSize: "5rem",
                    color: "#1A90E4",
                    fontStyle: "Monsterat"
                }}> SkillSphere</h1></div>
                <div className="item-grid item3">"An innovative platform offering immersive virtual labs for conducting
                    hands-on science and technology experiments, enabling learners to explore and understand complex
                    concepts interactively."
                </div>

                <div className="item-grid item4">
                    <button className="btn btn-outline-primary" style={{fontSize: "40px"}} onClick={goToHomePage} role="button">Get Started
                    </button>


                </div>

            </div>


        </div>
    );
}

export default Coverpage;