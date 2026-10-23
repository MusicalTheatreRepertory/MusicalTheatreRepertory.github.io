import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import './spa.css'
import '../../../styles/fonts.css'
import SPALayout from '../../../layouts/SPALayout.js'

const Director = () => {
  return (
    <SPALayout>
      <main>
        <section className="SPAheader">
          <div>
            <h1 style={{ fontSize: '2rem', marginTop: '20px' }}>
              Director's Statement
            </h1>
            <p style={{ textAlign: 'left', padding: '10px 0px' }}>
              Spring Awakening is a story of hope, resilience, loss, and love, as told through youth who are under-represented in their society. The show warns us against the dangers of ignorance, and promotes advocacy on all fronts. The most important aspect about this production of Spring Awakening is truth. As easy as it is to get lost in the fanciful rock and roll/1800s Germany hybrid, we as a company have dedicated ourselves to acknowledging the fact that the events of this show are real. These things have happened, and continue to happen around the world. We as a community cannot, and will not be silent anymore. We need to stand up for people who cannot stand up for themselves. We need to stand up for people struggling with their mental health, and don’t have the willpower to fight for themselves. We need to stand up for people who have been affected, or continue to be affected by sexual and physical abuse. We need to stand up and fight for women’s reproductive rights. We need to make change, and the only way we can do that is by taking action, and helping others.
            </p>
            <p style={{ textAlign: 'left', padding: '10px 0px' }}>
              - Alex Benjamin Weber
            </p>
            <p style ={{ textAlign: 'left', padding: '10px 0px' }}>
              </p>
          </div>
        </section>
      </main>
    </SPALayout>
  )
}

export default Director
