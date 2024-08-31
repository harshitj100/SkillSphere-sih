import React from 'react'
import Header1 from "./screen/Header1"
import "./styles/styles.css";
import img from "./assets/homepic.jpg";
import Home from "./Home";

import {createBrowserRouter,RouterProvider,Link} from "react-router-dom";


const App = () => {
    const router=createBrowserRouter([
        {
            path:"/",
            element:<Home />,
        },

    ])

  return (
    <div>
        <Header1 />

        <div className="start-grid">
            <div className="item-grid item1"><img src={img} /></div>
            <div className="item-grid item2"><h1 style={{textAlign:"center",fontSize:"5rem",color:"#1A90E4",fontFamily:"montserrat"}}>Welcome to</h1><h1 style={{textAlign:"center",fontSize:"5rem",color:"#1A90E4",fontStyle:"Monsterat"}}> SkillSphere</h1></div>
            <div className="item-grid item3">"An innovative platform offering immersive virtual labs for conducting hands-on science and technology experiments, enabling learners to explore and understand complex concepts interactively."</div>

            <div className="item-grid item4">
                <a className="btn btn-outline-primary" style={{fontSize: "40px"}} href="/" role="button">Get Started</a>


            </div>

        </div>

    </div>
  )
}

export default App
