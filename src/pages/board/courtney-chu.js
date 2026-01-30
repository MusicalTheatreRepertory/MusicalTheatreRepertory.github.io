import * as React from 'react'
import '../../styles/about.css'
import '../../styles/index.css'
import logo from '../../images/simple-logo-white.png'
import profilePic from '../../images/people/courtneychu.png' // Replace with your image
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
        <h1 className="about-title">Courtney Chu</h1>

        <div className="about-content">
          <div className="about-image">
            <img src={profilePic} alt="Courtney Chu Headshot" />
          </div>

          <div className="about-text">
            <h3>BFA Sound Design | Class Of 2027</h3>
            <p>
              Courtney Chu has been working with MTR since her first semester at
              USC in 2023. She is currently a Human Bio major at USC, but hopes
              to continue to work in the entertainment industry in the future.
              She is passionate about sound design, sound mixing, and acting. A
              fun fact about her is that her Corgi recently got a wheelchair and
              zips around running over people's feet!{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
