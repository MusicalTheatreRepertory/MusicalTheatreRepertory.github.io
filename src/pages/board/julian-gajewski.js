import * as React from 'react'
import '../../styles/about.css'
import '../../styles/index.css'
import logo from '../../images/simple-logo-white.png'
import profilePic from '../../images/people/julian.png' // Replace with your image
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
        <h1 className="about-title">Julian Gajewski</h1>

        <div className="about-content">
          <div className="about-image">
            <img src={profilePic} alt="Julian Gajewski Headshot" />
          </div>

          <div className="about-text">
            <h3>B.S. Legal Studies, B.A. Political Economy | Class of 2028</h3>
            <div className="icon-links">
              <a
                href="https://www.linkedin.com/in/julian-gajewski-3b6a57324/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn Icon" className="icon" />
              </a>
            </div>
            <p>
              Julian Gajewski (he/him) is a law major who happily found himself
              lost into the wonderful community of MTR. He has been involved in
              theater and music all his life, playing piano from a young age and
              getting on the stage since before he knew what Broadway really
              was. Julian has worked on four productions with MTR, starting as
              Piano 1 for “Falsettos,” evolving into Music Directing both
              “Anastasia” and “Adding Machine,” along with being a Producer for
              “Little Shop of Horrors.” He is also currently serving as MTR’s
              President for 2026, and could not be more thankful for the
              wonderful Board Members he has worked with to bring innovative
              musical theater for all, just as MTR has been able to provide for
              him. He is beyond excited to continue working with MTR in the
              coming semesters, and forever support the organization in the
              future.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
