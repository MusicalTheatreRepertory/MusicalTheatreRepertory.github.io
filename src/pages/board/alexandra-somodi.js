import * as React from 'react'
import '../../styles/about.css'
import '../../styles/index.css'
import logo from '../../images/simple-logo-white.png'
import profilePic from '../../images/people/alexandra.png' // Replace with your image
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
        <h1 className="about-title">Alexandra Somodi</h1>

        <div className="about-content">
          <div className="about-image">
            <img src={profilePic} alt="Alexandra Somodi Headshot" />
          </div>

          <div className="about-text">
            <h3>
              B.S. Computer Engineering & Computer Science, B.S. Pharmacology &
              Drug Development | Class of 2026
            </h3>
            <div className="icon-links">
              <a
                href="http://alexandrasomodi.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={websiteIcon} alt="Website Icon" className="icon" />
              </a>
              <a
                href="https://linkedin.com/in/alexandra-somodi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn Icon" className="icon" />
              </a>
            </div>
            <p>
              Alexandra Somodi (she/her) is a STEM-turned-theatre enthusiast and
              sweet treat connoisseur. She began her theatre career playing in
              pit ensembles for MTR, and consequently fell in love with musical
              theatre. Alexandra has been in five MTR productions, including
              Reed 1 for "Fun Home" and "Falsettos", Producer/Reed 1 for
              "Anastasia", Music Director for "Little Shop of Horrors", and
              Director for "Adding Machine". She also served as MTR's PR Chair
              and Music Coordinator in 2025. Alexandra is so grateful for all of
              the opportunities MTR has provided her over the years, and looks
              forward to supporting the arts in the future!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
