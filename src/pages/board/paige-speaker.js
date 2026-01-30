import * as React from 'react'
import '../../styles/about.css'
import '../../styles/index.css'
import logo from '../../images/simple-logo-white.png'
import profilePic from '../../images/people/paige.png' // Replace with your image
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
        <h1 className="about-title">Paige Speaker</h1>

        <div className="about-content">
          <div className="about-image">
            <img src={profilePic} alt="Paige Speaker Headshot" />
          </div>

          <div className="about-text">
            <h3>
              B.A. Theatre, B.A. Law, History, and Culture | Class of 2027
            </h3>

            <p>
              Paige is sort of a catch-all in theater, having done everything
              from directing to stage management to producing to admin! She
              practices law in her free time (because she's crazy) and enjoys
              baking, spreadsheets, and saying "oh yeah, I've heard that's good
              I should watch that" and proceeding to not watch said show. She
              loves being on MTR and hopes to continue doing theater throughout
              college and beyond.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
