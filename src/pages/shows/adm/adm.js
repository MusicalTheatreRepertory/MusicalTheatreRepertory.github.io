import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import './adm.css'
import '../../../styles/fonts.css'
import ADMLayout from '../../../layouts/ADMLayout.js'
import programcover from '../../../images/shows/adm/admbanner.png'

const AddingMachine = () => {
  return (
    <ADMLayout>
      <lsh-background style={{ backgroundColor: '#F8CBD0' }}>
        <main>
          <section className="ADMheader">
            <div>
              <div className="landing-container">
                <img src={programcover} alt="Little Shop of Horrors Program" />
              </div>
              <br />
              <h3>Adding Machine: A Musical</h3>
              <h3>Book & Lyrics by Joshua Schmidt and Jason Loewith</h3>
              <h3>Music by Joshua Schmidt</h3>
              <h3>Original Play by Elmer Rice</h3>
              <h3>Scene Dock Theatre | April 2-5, 2026</h3>
              <h2>
                All video and/or audio recording of this production is strictly
                prohibited.
              </h2>
              <div className="button">
                <Link to="../landack" className="ADM-button-details">
                  Land Acknowledgement
                </Link>
              </div>

              <div className="button">
                <Link to="../director" className="ADM-button-details">
                  A Note From Our Director
                </Link>
              </div>
              <div className="button">
                <Link to="../president" className="ADM-button-details">
                  A Note From The MTR President
                </Link>
              </div>

              <h1>Trigger Warnings</h1>
              <p>
                Please note that this show addresses themes, and contains depictions of racism, xenophobia, bigotry, antisemitism, misogyny, death, violence, self harm and incarceration. The production may also include flashing lights and loud sounds.
              </p>
              <br />
              <h1>The Team</h1>
              <div className="button">
                <Link to="../cast" className="ADM-button-details">
                  Cast
                </Link>
              </div>

              <div className="button">
                <Link to="../creative" className="ADM-button-details">
                  Creative Team
                </Link>
              </div>

              <div className="button">
                <Link to="../design" className="ADM-button-details">
                  Design Team
                </Link>
              </div>

              <div className="button">
                <Link to="../pit" className="ADM-button-details">
                  Band
                </Link>
              </div>
              <div className="button">
                <Link to="../crew" className="ADM-button-details">
                  Crew
                </Link>
              </div>

              <div className="button">
                <Link to="../board" className="ADM-button-details">
                  MTR Board
                </Link>
              </div>
              <h1>Special Thanks</h1>
              <p>
                We want to give special thanks for helping us make this project
                a reality to SDA, USG, TSA, Scott Faris, Hattie Ugoretz, Lola Mak, and the Scene Dock Theatre.{' '}
              </p>
              <br />
              <h1>Donations</h1>
              <div className="button">
                <Link
                  to="https://account.venmo.com/u/uscmtr"
                  className="ADM-button-details"
                >
                  Venmo Donation
                </Link>
              </div>

              <div className="button">
                <Link
                  to="http://fightongiveback.usc.edu/p/musical-theatre-repertory-25"
                  className="ADM-button-details"
                >
                  IgniteSC
                </Link>
              </div>

              <h1>Social Links</h1>
              <div className="button">
                <Link
                  to="https://linktr.ee/uscmtr?fbclid=PAZXh0bgNhZW0CMTEAAabuqHWDngRzQfRyiTo6Ql_iXGpVJwJ3QOQlwWM3CI2tevXKUPD8FLvlgdM_aem_IqflCVk_VrBrvqcc3zq9vA"
                  className="ADM-button-details"
                >
                  MTR's LinkTree
                </Link>
              </div>

              <div className="button">
                <Link
                  to="https://www.instagram.com/musicaltheatrerepertory/"
                  className="ADM-button-details"
                >
                  MTR's Instagram
                </Link>
              </div>
              <br />

              <h3>
                ADDING MACHINE: A MUSICAL is presented through
                special arrangement with Concord Theatricals. All
                authorized performance materials are also supplied by Concord.
              </h3>
              <h3 style={{ fontSize: '0.7rem', paddingBottom: '20px' }}>
                https://www.concordtheatricals.com
              </h3>
            </div>
          </section>
        </main>
      </lsh-background>
    </ADMLayout>
  )
}

export default AddingMachine
