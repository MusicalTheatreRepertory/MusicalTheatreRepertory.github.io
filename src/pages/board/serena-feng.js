import * as React from 'react'
import '../../styles/about.css'
import '../../styles/index.css'
import logo from '../../images/simple-logo-white.png'
import profilePic from '../../images/people/serena.png' // Replace with your image
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
        <h1 className="about-title">Serena Feng</h1>

        <div className="about-content">
          <div className="about-image">
            <img src={profilePic} alt="Serena Feng Headshot" />
          </div>

          <div className="about-text">
            <h3>
              BFA Stage Management, Minors in Spanish & Public Relations | Class
              of 2028
            </h3>
            <div className="icon-links">
              <a
                href="www.linkedin.com/in/serenafeng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn Icon" className="icon" />
              </a>
            </div>
            <p>
              Serena Feng (she/her) is a BFA Stage Management major with a minor
              in Spanish and Public Relations. At USC, she has been Production
              Stage Manager for Bat Boy and Polaroid Stories, Assistant Stage
              Manager for Antigone X, Troilus and Cressida, and Marat/Sade, and
              Light/Sound Board Operator for MTR’s Anastasia. Outside of
              theatre, she loves going to concerts, doing movie nights with
              friends, learning languages, calligraphy, and watching the sunset.
              She is so excited to join MTR and learn all about producing
              student theatre!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
