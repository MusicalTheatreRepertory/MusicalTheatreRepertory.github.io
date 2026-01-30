import * as React from 'react'
import '../styles/index.css'
import '../styles/fonts.css'
import '../styles/meet-the-board.css'
import logo from '../images/simple-logo-white.png'
import bigLogo from '../images/logo-white.png'

import adam from '../images/people/adam.png'
import alexandra from '../images/people/alexandra.png'
import allison from '../images/people/allison.png'
import ava from '../images/people/ava.png'
import ben from '../images/people/ben.png'
import courtney from '../images/people/courtneychu.png'
import casey from '../images/people/casey.png'
import grace from '../images/people/grace.png'
import gray from '../images/people/gray.png'
import hope from '../images/people/hope.png'
import julian from '../images/people/julian.png'
import kaitlyn from '../images/people/kaitlyn.png'
import kassidy from '../images/people/kassidy.png'
import keilah from '../images/people/keilah.png'
import maya from '../images/people/maya.png'
import mia from '../images/people/mia.png'
import namratha from '../images/people/namratha.png'
import nathan from '../images/people/nathan.png'
import paige from '../images/people/paige.png'
import richie from '../images/people/richie.png'
import sam from '../images/people/sam.png'
import sara from '../images/people/sara.png'
import sarah from '../images/people/sarah.png'
import scott from '../images/people/scottfaris.png'
import serena from '../images/people/serena.png'
import zoey from '../images/people/zoey.png'

const boardMembers = [
  {
    name: 'Julian Gajewski',
    title: 'President',
    photo: julian,
    page: '/board/julian-gajewski',
  },
  {
    name: 'Paige Speaker',
    title: 'Secretary',
    photo: paige,
    page: '/board/paige-speaker',
  },
  {
    name: 'Keilah Mora',
    title: 'Production Manager',
    photo: keilah,
    page: '/board/keilah-mora',
  },
  {
    name: 'Namratha Kasalanati',
    title: 'Co-Treasurer',
    photo: namratha,
    page: '/board/namratha-kasalanati',
  },
  {
    name: 'Nathan Bass',
    title: 'Co-Treasurer',
    photo: nathan,
    page: '/board/nathan-bass',
  },
  {
    name: 'Sara Gutierrez',
    title: 'EDIA Chair',
    photo: sara,
    page: '/board/sara-gutierrez',
  },
  {
    name: 'Samantha Caldera',
    title: 'Public Relations Chair',
    photo: sam,
    page: '/board/samantha-caldera',
  },
  {
    name: 'Kassidy Atherton',
    title: 'Member at Large',
    photo: kassidy,
    page: '/board/kassidy-atherton',
  },
  {
    name: 'Kaitlyn Chaidez',
    title: 'Member at Large',
    photo: kaitlyn,
    page: '/board/kaitlyn-chaidez',
  },
  {
    name: 'Courtney Chu',
    title: 'Member at Large',
    photo: courtney,
    page: '/board/courtney-chu',
  },
  {
    name: 'Hope Craig',
    title: 'Member at Large',
    photo: hope,
    page: '/board/hope-craig',
  },
  {
    name: 'Serena Feng',
    title: 'Asst. Production Manager',
    photo: serena,
    page: '/board/serena-feng',
  },
  {
    name: 'Adam Hassan',
    title: 'Member at Large',
    photo: adam,
    page: '/board/adam-hassan',
  },
  {
    name: 'Casey Hilton',
    title: 'Member at Large',
    photo: casey,
    page: '/board/casey-hilton',
  },
  {
    name: 'Ava Karlstad',
    title: 'Outreach Chair',
    photo: ava,
    page: '/board/ava-karlstad',
  },
  {
    name: 'Zoey Monnissen',
    title: 'Member at Large',
    photo: zoey,
    page: '/board/zoey-monnissen',
  },
  {
    name: 'Mia Murillo',
    title: 'MTRtist',
    photo: mia,
    page: '/board/mia-murillo',
  },
  {
    name: 'Richie Nickel',
    title: 'Member at Large',
    photo: richie,
    page: '/board/richie-nickel',
  },
  {
    name: 'Alexandra Somodi',
    title: 'Member at Large',
    photo: alexandra,
    page: '/board/alexandra-somodi',
  },
  {
    name: 'Allison Stowe',
    title: 'Member at Large',
    photo: allison,
    page: '/board/allison-stowe',
  },
  {
    name: 'Ben Williams',
    title: 'Member at Large',
    photo: ben,
    page: '/board/benjamin-williams',
  },
  {
    name: 'Scott Faris',
    title: 'Faculty Advisor',
    photo: scott,
    page: 'https://dramaticarts.usc.edu/scott-faris/',
  },
]

const boardAlum = [
  {
    name: 'Gray Abdalla',
    title: 'Secretary',
    photo: gray,
    linkedin: 'https://www.graysonabdalla.com/',
  },
  {
    name: 'Maya Channer',
    title: 'MTRtist',
    photo: maya,
    linkedin: 'https://www.linkedin.com/in/jacobrojit/',
  },
  {
    name: 'Sarah Costigan',
    title: 'Production Manager',
    photo: sarah,
    linkedin: 'https://www.linkedin.com/in/jacobrojit/',
  },
  {
    name: 'Grace Robinson',
    title: 'Member at Large',
    photo: grace,
    linkedin: 'https://www.linkedin.com/in/jacobrojit/',
  },
]

export default function People() {
  return (
    <div className="frame">
      <div className="mtr-section">
        <header className="header">
          <img src={logo} alt="MTR Logo" className="logo" />
          <nav className="nav">
            <a href="/">home</a>
            <a href="/meet-the-board">meet the board</a>
            <a href="/past-shows">past shows</a>
            <a href="/get-involved">get involved</a>
          </nav>
        </header>
        <div className="section-mtr">
          <div className="people-container">
            <h2 className="title">meet the board</h2>
            <div className="team-container">
              {boardMembers.map((member, index) => (
                <a
                  //href={`/board/${member.hyphenname}`}
                  href={member.page}
                  rel="noopener noreferrer"
                  key={index}
                  className="team-link"
                  text-decoration="none"
                >
                  <div key={index} className="team-card">
                    <img src={member.photo} className="team-image" />
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-position">{member.title}</p>
                  </div>
                </a>
              ))}
            </div>
            <h2 className="title">board alum</h2>
            <div className="team-container">
              {boardAlum.map((member, index) => (
                <a
                  href={member.page}
                  rel="noopener noreferrer"
                  key={index}
                  className="team-link"
                  text-decoration="none"
                >
                  <div key={index} className="team-card">
                    <img src={member.photo} className="team-image" />
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-position">{member.title}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
