import React, { useState } from 'react'
import logo from '../assets/logo.png'
import back from '../assets/menu-back.png'
import { Link } from 'react-router-dom'
import '../styles/header.css'
const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const menuBar = () => {
    setIsVisible(!isVisible);
  }
  return (
    <>
      {!isVisible ?
        <div className='side-menu-bar'>
          <div className='top-section'>
            <div className='top-upper-section'>
              <div className="back-icon" onClick={menuBar}>
                <img src={back} className='menu-back-btn-img' />
              </div>
              <div className='side-menu-logo'>
                <Link to="/">
                  <div className="logo">
                    <img src={logo} alt="Logo" className='logo-image-side-menu' />
                  </div>
                  <div className="logo-text-side-menu">
                    <span>Skillsphere</span>
                  </div>
                </Link>
              </div>
            </div>

            <div className='top-lower-section'>
              <Link to="/home">
                <div className='side-menu-bar-element'>Home</div>
              </Link>
              <Link to="/about">
                <div className='side-menu-bar-element'>About us</div>
              </Link>
              <Link to="/chatAi">
                <div className='side-menu-bar-element'>Chat AI</div>
              </Link>
              <Link to="/settings">
                <div className='side-menu-bar-element'>Settings</div>
              </Link>
            </div>
          </div>

          <div className='bottom-section'>
            <Link to="/help">
              <div className='side-menu-bar-element'>Help</div>
            </Link>
            <div className='side-menu-bar-element'>Log out</div>
          </div>
        </div>
        :
        <div>
        </div>
      }

      <nav className="navbar">
        <div className="left-section">
          <div className="menu-icon" onClick={menuBar}>
            &#9776;
          </div>
          <div className="logo">
            <img src={logo} alt="Logo" className='logo-image' />
          </div>
          <div className="logo-text">
            <span>Skillsphere</span>
          </div>
        </div>

        <div className="profile">
          <i className="fas fa-user"></i>
        </div>
      </nav>
    </>
  )
}

export default Header
