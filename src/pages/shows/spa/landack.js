import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import './spa.css'
import '../../../styles/fonts.css'
import SPALayout from '../../../layouts/SPALayout.js'

const LandAcknowledgement = () => {
  return (
    <SPALayout>
      <main>
        <section className="SPAheader">
          <div>
            <h1 style={{ fontSize: '1.5rem', marginTop: '20px' }}>
              Land Acknowledgement
            </h1>
            <p style={{ textAlign: 'center', padding: '10px 0px' }}>
              Musical Theatre Repertory at the University of Southern California
              acknowledges our presence on the traditional and ancestral lands
              of the Gabrielino-Tongva people. We would like to pay our respects
              to those forcibly removed from their homelands and those who
              continue to experience the long-lasting effects of the
              colonization of indigenous people. We would like to acknowledge
              the Chumash, Tataviam, Serrano, Cahuilla, Juaneno, and Luiseno
              People for the land that USC occupies around Southern California.
              With humility, we recognize and respect all past and present
              indigenous peoples, their histories, and their ties to the land.
            </p>
          </div>
        </section>
      </main>
    </SPALayout>
  )
}

export default LandAcknowledgement
