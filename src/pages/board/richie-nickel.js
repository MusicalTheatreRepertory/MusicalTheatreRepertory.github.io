import * as React from 'react'
import '../../styles/about.css'
import '../../styles/index.css'
import logo from '../../images/simple-logo-white.png'
import profilePic from '../../images/people/richie.png' // Replace with your image
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
        <h1 className="about-title">Richie Nickel</h1>

        <div className="about-content">
          <div className="about-image">
            <img src={profilePic} alt="Richie Nickel Headshot" />
          </div>

          <div className="about-text">
            <h3>
              BFA Sound Design, Minor in Engineering Management | Class of 2027
            </h3>
            <p>
              Richie Nickel is a junior sound designer. He's been a musician his
              whole life, but became interested in sound design for theater in
              high school. Outside of MTR, Richie is involved in TSA, USITT, and
              SSO, one of USC's student orchestras. He's excited to be a part of
              MTR!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
