import * as React from 'react'
import '../../styles/about.css'
import '../../styles/index.css'
import logo from '../../images/simple-logo-white.png'
import profilePic from '../../images/people/keilah.png' // Replace with your image
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
        <h1 className="about-title">Keilah Stephanie Mora</h1>

        <div className="about-content">
          <div className="about-image">
            <img src={profilePic} alt="Keilah Mora Headshot" />
          </div>

          <div className="about-text">
            <h3>BFA Sage Management | Class of 2027</h3>
            <div className="icon-links">
              <a
                href="https://keilahstephaniemora.my.canva.site"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={websiteIcon} alt="Website Icon" className="icon" />
              </a>
              <a
                href="linkedin.com/in/keilah-stephanie-mora-aa4362297"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn Icon" className="icon" />
              </a>
            </div>
            <p>
              Keilah Stephanie Mora is a BFA third year Stage Management student
              at USC SDA. She has loved singing and dancing ever since she was a
              little kid, and was basically born to adore musicals. Her biggest
              dream is to be a stage manager on Broadway in the future. She
              helps production manage for MTR and can't wait to put on more
              shows with the board!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
