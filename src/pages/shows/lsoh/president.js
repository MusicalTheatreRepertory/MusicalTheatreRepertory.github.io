import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import './lsoh.css'
import '../../../styles/fonts.css'
import LSOHLayout from '../../../layouts/LSOHLayout'

const President = () => {
  return (
    <LSOHLayout>
      <main>
        <section className="LSOHheader">
          <div>
            <h1 style={{ fontSize: '2rem', marginTop: '20px' }}>
              President's Statement
            </h1>
            <p style={{ textAlign: 'left', padding: '10px 0px' }}>
              Hello, and welcome to MTR’s Fall 2025 production of Little Shop of
              Horrors! We are thrilled to have you join us for our 20th season.
              This production is the culmination of over 70 USC students' hard
              work over the past 7 months. From performers to designers to board
              members to musicians, many wonderful creatives have lent a hand to
              make this production come to life. At MTR we aim to produce
              timely, innovative musical theatre that gives fellow students the
              opportunity to hone skills they are learning in class. Everything
              you see and hear tonight was created completely by students! MTR
              is proud to provide these educational and creative opportunities
              for students. However, with changing policies surrounding SDA
              grant opportunities and massive cuts in club funding from the
              university level, it is an especially difficult time to afford the
              creation of student theater. All donations go directly into MTR’s
              next production, helping to pay for rights, design, and venue.
              Please consider supporting MTR to keep student theater alive and
              thriving. If you are able to donate, Venmo codes are posted at the
              entrance to the theater. Enjoy the show!
            </p>
            <p style={{ textAlign: 'left', padding: '10px 0px' }}>
              - Courtney Chu
            </p>
          </div>
        </section>
      </main>
    </LSOHLayout>
  )
}

export default President
