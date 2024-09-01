import React from 'react'
import Header1 from "./screen/Header1"
import "./styles/styles.css";
import img from "./assets/homepic.jpg";
import {useState} from "react";
import Home from "./Home";
import About from "./About";
import {Link, Route, Router, Routes} from "react-router-dom";
import CoverPage from "./Coverpage";


import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Coverpage from "./Coverpage";


function App() {
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
        <RouterProvider router={router}>
            <Routes>
                <Route path="/" element={<Coverpage />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </RouterProvider>
    );
}

export default App
