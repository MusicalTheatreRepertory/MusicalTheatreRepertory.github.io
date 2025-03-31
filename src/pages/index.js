import React from "react"
import '../styles/global.css'
import { Link } from "gatsby"
import { Header } from "../components/Header";
import mtrCrest from "../images/mtr-crest-white.png";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <br />
      <div className="landing"> 
      <img
          src = { mtrCrest }
          alt="MTR Crest"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',  // Centers the image horizontally
            zIndex: 2, // Ensure image is on top of the video
            }}
        />
      </div>
      <br />
      <h1 style={{textAlign: "center", fontSize: "5rem", marginTop: "10vh", color: "#FFFFFF", fontWeight: "heavy", marginTop: "600px"}}>
        musical theatre by students, <br/> for students.
      </h1>
    </main>
  )
}

export default IndexPage
