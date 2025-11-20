import * as React from "react"
import "../../styles/about.css"
import "../../styles/index.css"
import logo from "../../images/simple-logo-white.png"
import profilePic from "../../images/people/sara.png" // Replace with your image
import websiteIcon from "../../images/icons/websiteicon.png"
import linkedinIcon from "../../images/icons/linkedinicon.png"

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
      <h1 className="about-title">Sara Gutierrez</h1>

      <div className="about-content">
        <div className="about-image">
          <img src={profilePic} alt="Sara Gutierrez Headshot" />
        </div>

        <div className="about-text">
          <h3>BFA Stage Management | Class of 2027</h3>
          <div className="icon-links">
  <a href="https://www.linkedin.com/in/sara-gutierrez-9b4965334/" target="_blank" rel="noopener noreferrer">
    <img src={linkedinIcon} alt="LinkedIn Icon" className="icon" />
  </a>
</div>
          <p>Adam Hassan (he/him) is a performer, pursuing his Bachelor of Arts in Dramatic Arts (Emphasis in Musical Theatre) and minors in Dance and Real Estate Finance at USC. With his roots tied to Lebanon and being born and raised in Dubai, UAE- Adam aims to bring different perspectives to the worlds around him by incorporating them into his art forms. Adam has portrayed characters in productions such as Vlad in 'Anastasia', Mushnik in 'Little Shop of Horrors', Big Jule in 'Guys and Dolls', White Rabbit in 'Alice in Wonderland' and Doody in 'Grease'. He has also been the Secretary and PR chair of the MTR Board. During his time on MTR, he produced MTR's Spring 2024 production of 'A New Brain'. Between exploring musicality through thematic lyricism and (too much) reading, he hopes to continue to create many authentic moments on stage forever. </p>
        </div>
      </div>
    </div>
    </div>
  )
}