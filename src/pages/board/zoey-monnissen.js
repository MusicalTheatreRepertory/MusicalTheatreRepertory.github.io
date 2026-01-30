import * as React from 'react'
import '../../styles/about.css'
import '../../styles/index.css'
import logo from '../../images/simple-logo-white.png'
import profilePic from '../../images/people/zoey.png' // Replace with your image
import websiteIcon from '../../images/icons/websiteicon.png'
import linkedinIcon from '../../images/icons/linkedinicon.png'

export default function AboutPage() {
  return (
    <div className="frame">
      <header className="header">
        <img src={logo} alt="MTR Logo" className="logo" />
        <nav className="nav">
          <a href="/">home</a>
          <a href="/meet-the-board">meet the board</a>
          <a href="/past-shows">past shows</a>
          <a href="/get-involved">get involved</a>
        </nav>
      </header>
      <div className="about-container">
        <h1 className="about-title">Zoey Monnissen</h1>

        <div className="about-content">
          <div className="about-image">
            <img src={profilePic} alt="Zoey Monnissen Headshot" />
          </div>

          <div className="about-text">
            <h3>B.A. Theatre | Class of 2026</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
