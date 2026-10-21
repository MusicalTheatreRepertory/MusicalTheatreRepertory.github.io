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
            </p>
            <p style={{ textAlign: 'left', padding: '10px 0px' }}>
            </p>
            <p style={{ textAlign: 'left', padding: '10px 0px' }}>
              - Alex Benjamin Weber
            </p>
          </div>
        </section>
      </main>
    </SPALayout>
  )
}

export default Director
