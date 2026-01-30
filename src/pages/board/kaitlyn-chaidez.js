import * as React from 'react'
import '../../styles/about.css'
import '../../styles/index.css'
import logo from '../../images/simple-logo-white.png'
import profilePic from '../../images/people/kaitlyn.png' // Replace with your image
import websiteIcon from '../../images/icons/websiteicon.png'

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
        <h1 className="about-title">Kaitlyn Chaidez</h1>

        <div className="about-content">
          <div className="about-image">
            <img src={profilePic} alt="Kaitlyn Chaidez Headshot" />
          </div>

          <div className="about-text">
            <h3>BFA Stage Management | Class of 2026</h3>
            <div className="icon-links">
              <a
                href="https://www.youtube.com/@lav3nder4luck"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={websiteIcon} alt="Website Icon" className="icon" />
              </a>
            </div>
            <p>
              Kaitlyn Chaidez is a BFA Stage Management Major and set to
              graduate in 2026! Kaitlyn, a SoCal native, finds great passion in
              orchestrating the behind-the-scenes magic that brings a production
              to life. She aspires to one day produce a staged adaptation of
              Pitch Perfect: The Musical and also become the president of the
              United States. In her free time, Kaitlyn is most likely sonny
              angel hunting, thrifting on Melrose, or creating a dope ass
              spreadsheet. You can find her cafe hopping on her youtube channel
              @lav3nder4luck. She is more than excited to be in the MTR family!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
