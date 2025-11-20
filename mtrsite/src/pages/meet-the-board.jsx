import * as React from "react"
import "../styles/index.css"
import "../styles/fonts.css"
import "../styles/meet-the-board.css"
import logo from "../images/simple-logo-white.png"
import bigLogo from "../images/logo-white.png"

import adam from "../images/people/adam.png"
import alexandra from "../images/people/alexandra.png"
import ben from "../images/people/ben.png"
import courtney from "../images/people/courtneychu.png"
import casey from "../images/people/casey.png"
import grace from "../images/people/grace.png"
import gray from "../images/people/gray.png"
import hope from "../images/people/hope.png"
import kaitlyn from "../images/people/kaitlyn.png"
import kassidy from "../images/people/kassidy.png"
import keilah from "../images/people/keilah.png"
import maya from "../images/people/maya.png"
import mia from "../images/people/mia.png"
import namratha from "../images/people/namratha.png"
import nathan from "../images/people/nathan.png"
import paige from "../images/people/paige.png"
import richie from "../images/people/richie.png"
import sam from "../images/people/sam.png"
import sara from "../images/people/sara.png"
import sarah from "../images/people/sarah.png"
import scott from "../images/people/scottfaris.png"
import serena from "../images/people/serena.png"

const boardMembers = [
  { name: 'Courtney Chu', title: 'President', photo: courtney, page: '/board/courtney-chu' },
  { name: 'Adam Hassan', title: 'Secretary', photo: adam, page: '/board/adam-hassan'},
  { name: 'Kaitlyn Chaidez', title: 'Production Manager', photo: kaitlyn, page: '/board/kaitlyn-chaidez'},
  { name: 'Namratha Kasalanati', title: 'Treasurer', photo: namratha, page: '/board/namratha-kasalanati' },
  { name: 'Sara Gutierrez', title: 'EDIA Chair', photo: sara, page: '' },
  { name: 'Alexandra Somodi', title: 'Public Relations Chair', photo: alexandra, page: '/board/alexandra-somodi' },
  { name: 'Kassidy Atherton', title: 'Member at Large', photo: kassidy, page: '' },
  { name: 'Nathan Bass', title: 'Member at Large', photo: nathan, page: 'https://www.linkedin.com/in/nathan-bass-99314735a/' },
  { name: 'Samantha Caldera', title: 'MTRtist', photo: sam, page: 'https://www.linkedin.com/in/juanmorenocoronado/' },
  { name: 'Hope Craig', title: 'Member at Large', photo: hope, page: 'https://www.linkedin.com/in/juanmorenocoronado/' },
  { name: 'Serena Feng', title: 'Member at large', photo: serena, page: 'https://www.linkedin.com/in/juanmorenocoronado/' },
  { name: 'Julian Gajewski', title: 'Member at Large', photo: logo, page: 'https://www.linkedin.com/in/vardhanrj/' },
  { name: 'Casey Hilton', title: 'Member at Large', photo: casey, page: 'https://www.linkedin.com/in/marios-tsotras-13ab56300/' },
  { name: 'Ava Karlstad', title: 'Outreach Chair', photo: logo, page: 'https://www.linkedin.com/in/marios-tsotras-13ab56300/' },
  { name: 'Zoey Monnissen', title: 'Member at Large', photo: logo, page: 'https://www.linkedin.com/in/marios-tsotras-13ab56300/' },
  { name: 'Richie Nickel', title: 'Member at Large', photo: richie, page: ''},
  { name: 'Keilah Mora', title: 'Asst. Prod Manager', photo: keilah, page: 'https://keilahstephaniemora.my.canva.site' },
  { name: 'Mia Murillo', title: 'MTRtist', photo: mia, page: 'https://www.linkedin.com/in/marios-tsotras-13ab56300/' },
  { name: 'Paige Speaker', title: 'Asst. Prod Manager', photo: paige, page: 'https://www.linkedin.com/in/marios-tsotras-13ab56300/' },
  { name: 'Allison Stowe', title: 'Member at Large', photo: logo, page: 'https://www.linkedin.com/in/marios-tsotras-13ab56300/' },
  { name: 'Ben Williams', title: 'Member at Large', photo: ben, page: 'https://www.linkedin.com/in/juanmorenocoronado/' },
  { name: 'Scott Faris', title: 'Faculty Advisor', photo: scott, page: 'https://www.linkedin.com/in/marios-tsotras-13ab56300/' },
]

const boardAlum = [
  { name: 'Gray Abdalla', title: 'Secretary', photo: gray, linkedin: 'https://www.graysonabdalla.com/' },
  { name: 'Maya Channer', title: 'MTRtist', photo: maya, linkedin: 'https://www.linkedin.com/in/jacobrojit/' },
  { name: 'Sarah Costigan', title: 'Production Manager', photo: sarah, linkedin: 'https://www.linkedin.com/in/jacobrojit/' },
  { name: 'Grace Robinson', title: 'Member at Large', photo: grace, linkedin: 'https://www.linkedin.com/in/jacobrojit/' },
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
            <img src={member.photo} className="team-image"/>
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
            <img src={member.photo} className="team-image"/>
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
  );
};