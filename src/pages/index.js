import React from "react"
import '../styles/global.css'
import '../styles/main.css'
import { Link } from "gatsby"
import { Header } from "../components/Header";
import mtrCrest from "../images/mtr-crest-white.png";
import falsettos from "../images/falsettos1.jpg";

const IndexPage = () => {
  return (
    <main style={{ backgroundColor: "#FFFFFF" }}>
      <Header />
      <section className="landing-section">
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
      <br />
      <h1>
        musical theatre by students, <br/> for students.
      </h1>
      </div>
      </section>

  <section className = "slogan-container">
    <img
      src = { falsettos }
      alt="Falsettos, Fall 2024"
    />
  </section>

  <section className="who-we-are-header">
  {/* Left Side: Text Content */}
    <h2>
      who we are
    </h2>
  </section>
  <section className="who-we-are-text">
    <div>
    <p>
      Musical Theatre Repertory is a community of USC students passionate about bringing performance and design opportunities to students beyond the classroom.
    </p>
    <p>
      The MTR Board is a producing body, facilitating one full-scale musical each semester, as well as a variety of smaller projects throughout the year.
    </p>
    <p>
      We strive to facilitate exploration of theatre and performance in a safe and inclusive environment, where students can learn and grow as artists.
    </p>
    <p>
      Anyone with a passion for acting, design, or theatre overall is welcome to get involved in our community!
    </p>
    </div>  

  {/* Right Side: Image */}
  <div>
    <img 
    src = { falsettos }
    alt="Falsettos, Fall 2024"
    style={{
      width: "100%",
      height: "auto",
      maxWidth: "600px", // Set a max width for larger screens
      marginLeft: "auto",
      marginRight: "auto",
    }}
    />
  </div>
</section>
    </main>
  )
}

export default IndexPage
