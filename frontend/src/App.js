import React from 'react'

import Coverpage from "./Coverpage";
import Home from "./Home";
import About from "./About";
import Course from './Course';
import V_lab from './V_lab';

import { Route, BrowserRouter as Router , Routes } from "react-router-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Header1 from "./screen/Header1"
// import img from "./assets/homepic.jpg";
import "./styles/styles.css";


const App = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Coverpage />,
  //   },
  //   {
  //     path: "/home",
  //     element: <Home />
  //   }
  // ]);
  return (
    <div>
      <Router>
        <Routes>

          <Route path = "/" element = { <Coverpage/> } />
          <Route path = "/home" element = {<Home/>}/>
          <Route path = "/about-us" element = {<About/>}/>
          <Route path = "/course" element =  {<Course/>}/>
          <Route path = "/virtual-lab" element = { <V_lab/> }/>

        </Routes>
      </Router>
    </div>
  )
}

export default App;