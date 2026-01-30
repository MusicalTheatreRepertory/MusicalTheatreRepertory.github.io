import * as React from 'react'
import '../../styles/about.css'
import '../../styles/index.css'
import logo from '../../images/simple-logo-white.png'
import profilePic from '../../images/people/kassidy.png' // Replace with your image
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
        <h1 className="about-title">Kassidy Atherton</h1>

        <div className="about-content">
          <div className="about-image">
            <img src={profilePic} alt="Kassidy Atherton Headshot" />
          </div>

          <div className="about-text">
            <h3>
              B.A. Theatre (Musical Theatre emphasis), Minor in Dance | Class of
              2028
            </h3>
            <p>
              Kassidy Atherton is an aspiring actress and singer from Telluride,
              Colorado. She gained her passion for performing growing up
              surrounded by the music festivals and an artistically rich
              community. In addition to pursuing her BA in Theatre with an
              emphasis in Music Theatre, Kassidy is a member of the Theatre
              Student Association. Most recently, she performed in Midsummer's
              Night Dream (Hippolyta) and Two Gentleman of Verona (Host). She's
              beyond excited to join MTR's board this semester and be part of
              creating incredible student productions on campus!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
