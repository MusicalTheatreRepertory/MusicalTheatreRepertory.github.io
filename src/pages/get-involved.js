import React from 'react'
import '../styles/index.css'
import '../styles/pastshows.css'
import logo from '../images/simple-logo-white.png'
import MTRLayout from '../layouts/MTRLayout.js'

export default function GetInvolved() {
  return (
    <MTRLayout>
    <main>
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
        <section className = "section-mtr">
            <h1>get involved!</h1>
        </section>

        <section className = "section-mtr">
            <h1>join our board!</h1>
            <p>MTR holds board applications every semester for new members to apply to join. Once you are accepted onto the board, you are considered a member at large until you graduate. From there, you may take on additional responsibilities such as production team, executive board and various committees. Information on when these applications are open can be found on our Instagram (@musicaltheatrerepertory).</p>
        </section>
        <section className = "section-mtr">
            <h1>pitch a show!</h1>
            <p>MTR holds show pitch applications every semester to be produced the following semester. Any USC student is welcome to submit a pitch, either as director or another creative team role. More details on our application cycle can be found on our Instagram!</p>
        </section>
        <section className = "section-mtr">
            <h1>work on a show!</h1>
            <p>Each MTR production includes a creative team, design team, cast, pit ensemble, and deck crew. If you're interested in working on a show, keep an eye on our Instagram for when these opportunities are available!</p>
        </section>
      </div>
    </main>
    </MTRLayout>
  )
}
