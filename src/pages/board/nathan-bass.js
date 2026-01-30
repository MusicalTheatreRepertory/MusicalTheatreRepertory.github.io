import * as React from 'react'
import '../../styles/about.css'
import '../../styles/index.css'
import logo from '../../images/simple-logo-white.png'
import profilePic from '../../images/people/nathan.png' // Replace with your image
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
        <h1 className="about-title">Nathan Bass</h1>

        <div className="about-content">
          <div className="about-image">
            <img src={profilePic} alt="Nathan Bass Headshot" />
          </div>

          <div className="about-text">
            <h3>
              B.S. Public Policy, Minor in Environmental Studies | Class of 2028
            </h3>
            <div className="icon-links">
              <a
                href="https://www.linkedin.com/in/nathan-bass-99314735a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn Icon" className="icon" />
              </a>
            </div>
            <p>
              Nathan Bass, a sophomore studying Public Policy and Environmental
              Studies, is exquisitely enthused to be on the MTR Board! Nathan
              has been fascinated by creating and being part of theatre since he
              could talk (and oh did he talk), whether that was through making
              unreasonably dramatic IMovies with his sisters or peaking in his
              5th-grade production of Xanadu Jr. Outside of the MTR Board, you
              can find him spaced out listening to music, trying to learn new
              instruments, or doing high-caliber, intense improv with the Merry
              Men. Nathan is so excited to meet and learn from all of the cool
              people on MTR, and is looking forward to working to create great
              theatre!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
