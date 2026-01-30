import * as React from 'react'
import '../../styles/about.css'
import '../../styles/index.css'
import logo from '../../images/simple-logo-white.png'
import profilePic from '../../images/people/namratha.png' // Replace with your image
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
        <h1 className="about-title">Namratha Kasalanati</h1>

        <div className="about-content">
          <div className="about-image">
            <img src={profilePic} alt="Namratha Kasalanati Headshot" />
          </div>

          <div className="about-text">
            <h3>
              B.M. Composition, B.S. Economics/Mathematics | Class of 2026
            </h3>
            <div className="icon-links">
              <a
                href="https://www.namrathamusic.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={websiteIcon} alt="Website Icon" className="icon" />
              </a>
              <a
                href="www.linkedin.com/in/namratha-kasalanati"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn Icon" className="icon" />
              </a>
            </div>
            <p>
              Namratha V. Kasalanati (she/her) is a composer, pianist, cellist,
              and community activist, currently pursuing her Bachelor of Music
              in Composition and a Bachelor of Science in Economics/Mathematics
              at USC. Hailing from the Bay Area, her work aims to bring
              attention to the diverse musical traditions around the world,
              focusing on the intersections between Western and Indian classical
              music. Some of her notable composition teachers have been Dr.
              Donald Crockett, Dr. Veronika Krausas, Brian Head, and Camae Ayewa
              (Moor Mother). She has also studied conducting with Sharon Lavery
              and orchestration with Dr. Frank Ticheli, Dr. Juan Pablo
              Contreras, and Mark Weiser. Beyond the classical sphere, she has
              composed for fifteen short films, one of which was screened at the
              Ojai Film Festival in 2023. In her spare time, she loves to read
              fantasy novels, consume Sour Skittles (or Trader Joes
              Cinna-Dragons), and triple jump.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
