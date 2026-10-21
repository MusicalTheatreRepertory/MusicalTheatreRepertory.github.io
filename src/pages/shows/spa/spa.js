import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import './spa.css'
import '../../../styles/fonts.css'
import SPALayout from '../../../layouts/SPALayout.js'
import programcover from '../../../images/shows/spa/cropped-spa-announcement.png'

const SpringAwakening = () => {
  return (
    <SPALayout>
      <spa-background style={{ backgroundColor: '#443949' }}>
        <main>
          <section className="SPAheader">
            <div>
              <div className="landing-container">
                <img src={programcover} alt="Spring Awakening Program" />
              </div>
              <br />
              <h3>Spring Awakening</h3>
              <h3>Book & Lyrics by Steven Sater</h3>
              <h3>Music by Duncan Sheik</h3>
              <h3>Scene Dock Theatre | October 22-25, 2026</h3>
              <h2>
                All video and/or audio recording of this production is strictly
                prohibited.
              </h2>
              <div className="button">
                <Link to="../landack" className="SPA-button-details">
                  Land Acknowledgement
                </Link>
              </div>

              {/* <div className="button">
                <Link to="../director" className="SPA-button-details">
                  A Note From Our Director
                </Link>
              </div> */}
              <div className="button">
                <Link to="../president" className="SPA-button-details">
                  A Note From The MTR President
                </Link>
              </div>

              <h1>Trigger Warnings</h1>
              <p>
                Please be advised: This production contains the utilization of a non-firing prop firearm, mature and potentially triggering themes, mental health & suicide, sexual content, abuse and violence, substance abuse, and contains loud noises. If you know anyone who is struggling or in a crisis, confidential, free help is available by calling 988 or by visiting <a href="https://988lifeline.org" target="_blank" rel="noopener noreferrer" >988lifeline.org</a>.
              </p>
              <br />
              <h1>The Team</h1>
              <div className="button">
                <Link to="../cast" className="SPA-button-details">
                  Cast
                </Link>
              </div>

              <div className="button">
                <Link to="../creative" className="SPA-button-details">
                  Creative Team
                </Link>
              </div>

              <div className="button">
                <Link to="../design" className="SPA-button-details">
                  Design Team
                </Link>
              </div>

              <div className="button">
                <Link to="../pit" className="SPA-button-details">
                  Band
                </Link>
              </div>

              <div className="button">
                <Link to="../board" className="SPA-button-details">
                  MTR Board
                </Link>
              </div>
              <h1>Special Thanks</h1>
              <p>
                We want to give special thanks for helping us make this project
                a reality to SDA, USG, TSA, Scott Faris, and the Scene Dock Theatre.{' '}
              </p>
              <br />
              <h1>Donations</h1>
              <div className="button">
                <Link
                  to="https://account.venmo.com/u/uscmtr"
                  className="SPA-button-details"
                >
                  Venmo Donation
                </Link>
              </div>

              {/* <div className="button">
                <Link
                  to="http://fightongiveback.usc.edu/p/musical-theatre-repertory-25"
                  className="SPA-button-details"
                >
                  IgniteSC
                </Link>
              </div> */}

              <h1>Social Links</h1>
              <div className="button">
                <Link
                  to="https://linktr.ee/uscmtr?fbclid=PAZXh0bgNhZW0CMTEAAabuqHWDngRzQfRyiTo6Ql_iXGpVJwJ3QOQlwWM3CI2tevXKUPD8FLvlgdM_aem_IqflCVk_VrBrvqcc3zq9vA"
                  className="SPA-button-details"
                >
                  MTR's LinkTree
                </Link>
              </div>

              <div className="button">
                <Link
                  to="https://www.instagram.com/musicaltheatrerepertory/"
                  className="SPA-button-details"
                >
                  MTR's Instagram
                </Link>
              </div>
              <br />

              <h3>
                Spring Awakening is presented through
                special arrangement with Concord Theatricals. All
                authorized performance materials are also supplied by Concord Theatricals.
              </h3>
              <h3 style={{ fontSize: '0.7rem', paddingBottom: '20px' }}>
                https://www.concordtheatricals.com
              </h3>
            </div>
          </section>
        </main>
      </spa-background>
    </SPALayout>
  )
}

export default SpringAwakening
