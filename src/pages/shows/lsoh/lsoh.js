import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import './lsoh.css'
import '../../../styles/fonts.css'
import LSOHLayout from '../../../layouts/LSOHLayout.js'
import programcover from '../../../images/shows/lsh/lshannouncement.png'

const LittleShop = () => {
  return (
    <LSOHLayout>
      <lsh-background style={{ backgroundColor: '#F8CBD0' }}>
        <main>
          <section className="LSOHheader">
            <div>
              <div className="landing-container">
                <img src={programcover} alt="Little Shop of Horrors Program" />
              </div>
              <br />
              <h3>Little Shop of Horrors</h3>
              <h3>Book & Lyrics by Howard Ashman</h3>
              <h3>Music by Alan Menken</h3>
              <h3>Scene Dock Theatre | December 4-7, 2025</h3>
              <h2>
                All video and/or audio recording of this production is strictly
                prohibited.
              </h2>
              <div className="button">
                <Link to="../landack" className="LSOH-button-details">
                  Land Acknowledgement
                </Link>
              </div>

              <div className="button">
                <Link to="../director" className="LSOH-button-details">
                  A Note From Our Director
                </Link>
              </div>
              <div className="button">
                <Link to="../president" className="LSOH-button-details">
                  A Note From The MTR President
                </Link>
              </div>

              <h1>Trigger Warnings</h1>
              <p>
                Please be advised: This production contains the utilization of a
                prop firearm, real-life gun sounds, domestic violence, and
                contains mentions and descriptions of death, as well as flashing
                lights/loud noises.
              </p>
              <br />
              <h1>The Team</h1>
              <div className="button">
                <Link to="../cast" className="LSOH-button-details">
                  Cast
                </Link>
              </div>

              <div className="button">
                <Link to="../creative" className="LSOH-button-details">
                  Creative Team
                </Link>
              </div>

              <div className="button">
                <Link to="../design" className="LSOH-button-details">
                  Design Team
                </Link>
              </div>

              <div className="button">
                <Link to="../pit" className="LSOH-button-details">
                  Band
                </Link>
              </div>

              {/* <div className="button">
                <Link 
                    to="/AnastasiaProgram/crew"
                    className="button-details"
                >
                Crew
                </Link>
            </div>
                */}
              <div className="button">
                <Link to="../board" className="LSOH-button-details">
                  MTR Board
                </Link>
              </div>
              <h1>Special Thanks</h1>
              <p>
                We want to give special thanks for helping us make this project
                a reality to SDA, USG, TSA, ATC, Scott Faris, Britney White,
                Duncan Mahoney, Alexandra Siy, Alex Kerr, Joshua Passmore, Sarah
                Brewer, Halia Lindauer, and the Scene Dock Theatre.{' '}
              </p>
              <br />
              <h1>Donations</h1>
              <div className="button">
                <Link
                  to="https://account.venmo.com/u/uscmtr"
                  className="LSOH-button-details"
                >
                  Venmo Donation
                </Link>
              </div>

              <div className="button">
                <Link
                  to="http://fightongiveback.usc.edu/p/musical-theatre-repertory-25"
                  className="LSOH-button-details"
                >
                  IgniteSC
                </Link>
              </div>

              <h1>Social Links</h1>
              <div className="button">
                <Link
                  to="https://linktr.ee/uscmtr?fbclid=PAZXh0bgNhZW0CMTEAAabuqHWDngRzQfRyiTo6Ql_iXGpVJwJ3QOQlwWM3CI2tevXKUPD8FLvlgdM_aem_IqflCVk_VrBrvqcc3zq9vA"
                  className="LSOH-button-details"
                >
                  MTR's LinkTree
                </Link>
              </div>

              <div className="button">
                <Link
                  to="https://www.instagram.com/musicaltheatrerepertory/"
                  className="LSOH-button-details"
                >
                  MTR's Instagram
                </Link>
              </div>
              <br />

              <h3>
                LITTLE SHOP OF HORRORS (BROADWAY VERSION) is presented through
                special arrangement with Music Theatre International (MTI). All
                authorized performance materials are also supplied by MTI.
              </h3>
              <h3 style={{ fontSize: '0.7rem', paddingBottom: '20px' }}>
                https://www.mtishows.com
              </h3>
            </div>
          </section>
        </main>
      </lsh-background>
    </LSOHLayout>
  )
}

export default LittleShop
