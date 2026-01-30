import * as React from 'react'
import '../../styles/about.css'
import '../../styles/index.css'
import logo from '../../images/simple-logo-white.png'
import profilePic from '../../images/people/hope.png' // Replace with your image
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
        <h1 className="about-title">Hope Craig</h1>

        <div className="about-content">
          <div className="about-image">
            <img src={profilePic} alt="Hope Craig Headshot" />
          </div>

          <div className="about-text">
            <h3>
              B.A. Theatre (Musical Theatre emphasis), Minor in Dance | Class of
              2027
            </h3>
            <p>
              Hope is a junior theatre major with an emphasis in musical
              theatre, as well as a minor in dance. She has performed in four
              productions at USC (including two MTR shows), and is currently
              co-choreographing MTR's "Little Shop of Horrors"! This is Hope's
              first semester on the board, and she is so excited to work with
              such an incredible group of people. Outside of theatre, Hope is an
              avid reader, loves collecting vinyls and cds (always open to music
              recommendations), and is Dulce's #1 patron. She sends all her love
              and gratitude to her family, friends, and everyone who has been
              part of her journey!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
