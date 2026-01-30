import * as React from 'react'
import '../../styles/about.css'
import '../../styles/index.css'
import logo from '../../images/simple-logo-white.png'
import profilePic from '../../images/people/sam.png' // Replace with your image
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
        <h1 className="about-title">Samantha Caldera</h1>

        <div className="about-content">
          <div className="about-image">
            <img src={profilePic} alt="Samantha Caldera Headshot" />
          </div>

          <div className="about-text">
            <h3>
              B.A. Cinema & Media Studies, Minor in Theatre | Class of 2028
            </h3>
            <div className="icon-links">
              <a
                href="www.linkedin.com/in/samanthacaldera"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn Icon" className="icon" />
              </a>
            </div>
            <p>
              Samantha is a sophomore at USC majoring in cinema & media studies
              with a minor in theatre. She’s a huge movie lover and pop culture
              nerd who’s always down to talk about the latest film or
              binge-worthy show. Her love for musicals started in high school
              when she got involved in theater productions, and she’s been
              hooked ever since. Samantha hopes to direct her own films one day
              and is super excited to dive into all the creative opportunities
              at USC—especially anything that combines her passions for
              storytelling, performance, and entertainment.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
