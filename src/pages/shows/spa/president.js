import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import './spa.css'
import '../../../styles/fonts.css'
import SPALayout from '../../../layouts/SPALayout'

const President = () => {
  return (
    <SPALayout>
      <main>
        <section className="SPAheader">
          <div>
            <h1 style={{ fontSize: '2rem', marginTop: '20px' }}>
              President's Statement
            </h1>
            <p style={{ textAlign: 'left', padding: '10px 0px' }}>
              Hello, and we are so incredibly thrilled to have you join us for MTR’s Fall 2026 production of Spring Awakening! MTR commits itself in its motto of creating innovative musical theater by students, for students. Our Board makes the utmost effort to ensure that all students, affiliated with or without SDA, are welcome to engage in creative endeavors to contribute to the productions that we stage each semester. And this is clear here: over the course of three months, more than 50 USC students have come together to contribute and elevate this production to the experience before you today. Actors, designers, creatives, musicians, board members, and even more have all come together to produce the performance you will be watching today. MTR’s innovative musical theater is held up by the backbone of student contributions, and the Board takes pride in all of the students who use their education and backgrounds to create the quality we achieve each semester.
            </p>
            <p style={{ textAlign: 'left', padding: '10px 0px' }}>
            With this in mind, none of this would be possible without the generous donations that are provided to MTR by the staff at SDA, USG, and especially our individual contributors, like yourself. Student theater is exclusively funded by donations, and the budget deficit affecting USC has put student productions into a difficult position. Since our biggest budget comes from individual contributors, any amount is substantial to fund our upcoming productions and will be contributed to rights, design, and venue costs. Student theater relies on the backbone of student contributions, both in creative endeavors and financial investments. If you are able to donate, Venmo codes are posted at the entrance to this theater and on the main page of this program.
            </p>
            <p style={{ textAlign: 'left', padding: '10px 0px' }}>
              Thank you for coming to support student theater and for your support towards MTR’s productions. We are excited for you to engage with the innovative designs produced by USC students. Enjoy the show!
              </p>
            <p style={{ textAlign: 'left', padding: '10px 0px' }}>
              - Julian Gajewski
            </p>
          </div>
        </section>
      </main>
    </SPALayout>
  )
}

export default President
