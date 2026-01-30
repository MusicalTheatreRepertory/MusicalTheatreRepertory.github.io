import * as React from 'react'
import '../../styles/about.css'
import '../../styles/index.css'
import logo from '../../images/simple-logo-white.png'
import profilePic from '../../images/people/sara.png' // Replace with your image
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
        <h1 className="about-title">Sara Gutierrez</h1>

        <div className="about-content">
          <div className="about-image">
            <img src={profilePic} alt="Sara Gutierrez Headshot" />
          </div>

          <div className="about-text">
            <h3>BFA Stage Management | Class of 2027</h3>
            <div className="icon-links">
              <a
                href="https://www.linkedin.com/in/sara-gutierrez-9b4965334/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn Icon" className="icon" />
              </a>
            </div>
            <p>
              My name is Sara Gutierrez, and I am a BFA stage management major
              from Los Angeles, California. Born and raised in LA, theater has
              always been in my life. From seeing shows to in high school
              participating in stage management for shows, it has always been a
              passion of mine. The arts live and breathe in LA so how could I
              not be a part of making them happen? From theater to music to the
              TV and movie industry I am there. Along with studying stage
              management at USC, I am also pursuing a minor in Music Industry
              through the Thornton School of Music.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
