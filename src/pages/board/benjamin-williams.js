import * as React from 'react'
import '../../styles/about.css'
import '../../styles/index.css'
import logo from '../../images/simple-logo-white.png'
import profilePic from '../../images/people/ben.png' // Replace with your image
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
        <h1 className="about-title">Ben Williams</h1>

        <div className="about-content">
          <div className="about-image">
            <img src={profilePic} alt="Ben Williams Headshot" />
          </div>

          <div className="about-text">
            <h3>
              BFA Theatrical Design, Minor in Themed Entertainment | Class of
              2027
            </h3>
            <p>
              Benjamin Williams is a Junior at the University of Southern
              California studying Theatrical Design with a minor Themed
              Entertainment. He is a part of The School of Dramatic Arts and The
              School of Cinematic Arts. Ben is a graduate of Novato High
              School’s MSA Theatre Program and has been designing for theatre
              and live experiences for over 8 years. He is experienced in
              lighting, scenic and immersive design for live entertainment. Ben
              Williams would like to provide his ranking of cereal, for anyone
              scrolling the MTR website and wondering about cereal
            </p>
            <p>
              S Tier: Rice Krispies, Froot Loops, Gorilla Munch, Raisin Bran,
              Special K with Strawberries, Cap'n Crunch Berries
            </p>
            <p>
              A Tier: Honey Nut Cheerios, Rasin Bran Crunch, Cap'n Crunch, Cocoa
              Puffs, Cocoa Krispies, Reese's Puffs, Lucky Charms
            </p>
            <p>
              B Tier: Apple Jacks, Peanut Butter Cap'n Crunch, Cinnamon Toast
              Crunch, French Toast Crunch, Corn Pops
            </p>
            <p>
              C Tier: Cheerios, Corn Flakes, Frosted Flakes, Honey Bunches of
              Oats, Cocoa Pebbles, Fruity Pebbles, Special K
            </p>
            <p>
              D Tier: Frosted Cheerios, Cookie Crisp, Frosted Mini Wheats, Kix,
              Trix
            </p>
            <p>
              F Tier: Cap'n Crunch Oops! All Berries, Chocolate Cheerios, Life,
              Wheaties
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
