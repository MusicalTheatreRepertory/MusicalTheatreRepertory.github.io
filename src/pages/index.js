import * as React from 'react'
import '../styles/index.css'
import '../styles/fonts.css'
import MTRLayout from '../layouts/MTRLayout.js'
import logo from '../images/simple-logo-white.png'
import bigLogo from '../images/logo-white.png'

export default function Index() {
  return (
    <MTRLayout>
      <background style={{ backgroundColor: '#FFF' }}>
        <div className="hero">
          {/* Transparent overlay header */}
          <header className="header">
            <img src={logo} alt="MTR Logo" className="logo" />
            <nav className="nav">
              <a href="/">home</a>
              <a href="/meet-the-board">meet the board</a>
              <a href="/past-shows">past shows</a>
              <a href="/get-involved">get involved</a>
            </nav>
          </header>

          {/* Page content centered in hero */}
          <main className="hero-main">
            <img src={bigLogo} alt="Centered MTR Logo" className="big-logo" />
            <h1>musical theatre repertory</h1>
            <h2>innovative theatre by students, for students</h2>
          </main>

          <section className="section-mtr">
            <h1>what is mtr?</h1>
            <p>
              We are an entirely student-led organization at the University of
              Southern California dedicated to putting on full-scale musical
              productions and related musical events every semester. We are
              committed to community and strive to create an inclusive
              environment for all students to learn, explore, and hone their
              craft.
            </p>
            <p>
              MTR is a space where students can try anything in the realm of
              musical theatre, from acting and singing to directing, designing,
              and producing. We are open to all students, no experience
              required.
            </p>
          </section>
          <section className="section-mtr">
            <h1>upcoming opportunities</h1>
            <p>
              We are excited to announce our Spring 2026 production: Adding
              Machine, directed by Alexandra Somodi! Come see our show April
              2nd-5th in the Scene Dock Theatre.
            </p>
            <p>
              We are currently accepting applications to join the MTR board!
              Applications are due February 4th at 11:59pm. Find the link{' '}
              <a
                href="https://forms.gle/zKCjjiBf7Nns9u3s8"
                rel="noopener noreferrer"
                target="_blank"
              >
                here
              </a>
              .
            </p>
            <p>
              Have a musical you want to bring to USC? Stay tuned for
              information on pitching a show to MTR!
            </p>
          </section>
        </div>
      </background>
    </MTRLayout>
  )
}
