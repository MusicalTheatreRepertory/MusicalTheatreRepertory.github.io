import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import './adm.css'
import '../../../styles/fonts.css'
import ADMLayout from '../../../layouts/ADMLayout'

const President = () => {
  return (
    <ADMLayout>
      <main>
        <section className="ADMheader">
          <div>
            <h1 style={{ fontSize: '2rem', marginTop: '20px' }}>
              President's Statement
            </h1>
            <p style={{ textAlign: 'left', padding: '10px 0px' }}>
              insert msg here!
            </p>
            <p style={{ textAlign: 'left', padding: '10px 0px' }}>
              - Julian Gajewski
            </p>
          </div>
        </section>
      </main>
    </ADMLayout>
  )
}

export default President
