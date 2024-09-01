import React from 'react'
import {useState} from "react";
import Home from "./Home";
import About from "./About";
import {Link, Route, Router, Routes} from "react-router-dom";
import CoverPage from "./Coverpage";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Coverpage from "./Coverpage";
import Header1 from "./screen/Header1"
import "./styles/styles.css";
import img from "./assets/homepic.jpg";
import Course from './Course';
import V_lab from './V_lab';
const App = () => {
  const router = createBrowserRouter([
    {
        path: "/",
        element:<Coverpage />,
    },
    {
        path:"/home",
        element:<Home />
    }
]);
  return (
    <div>
        <Header1 />
        <div className="start-grid">
            <div className="item-grid item1"><img src={img} /></div>
            <div className="item-grid item2"><h1 style={{textAlign:"center",fontSize:"5rem",color:"#1A90E4",fontFamily:"montserrat"}}>Welcome to</h1><h1 style={{textAlign:"center",fontSize:"5rem",color:"#1A90E4",fontStyle:"Monsterat"}}> SkillSphere</h1></div>
            <div className="item-grid item3">"An innovative platform offering immersive virtual labs for conducting hands-on science and technology experiments, enabling learners to explore and understand complex concepts interactively."</div>
            <div className="item-grid item4"><a className="btn btn-outline-primary" href="#" role="button">Get Started</a></div>
        </div>
        <V_lab/>
        <RouterProvider router={router}>
            <Routes>
                <Route path="/" element={<Coverpage />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </RouterProvider>
    </div>
  )


export default App;