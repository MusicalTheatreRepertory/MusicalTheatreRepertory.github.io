import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import './adm.css'
import '../../../styles/fonts.css'
import ADMLayout from '../../../layouts/ADMLayout.js'

const Director = () => {
  return (
    <ADMLayout>
      <main>
        <section className="ADMheader">
          <div>
            <h1 style={{ fontSize: '2rem', marginTop: '20px' }}>
              Director's Statement
            </h1>
            <p style={{ textAlign: 'left', padding: '10px 0px' }}>
              Adding Machine is in honor of today's ever-changing technological landscape. Too often, the celebrations of innovation and improved efficiency drown out the impacts on real people. When any creation can be actualized in a snap of a finger, can we stick to what is authentic and real? Or will we choose what feels comfortable and easy, even at our own detriment? Corporations are more enamored by the numbers than the livelihood of the early bird or the goals of the third shift worker. As a result, we too have grown blind to ourselves, focused more on what we can produce than who we can be.
            </p>
            <p style={{ textAlign: 'left', padding: '10px 0px' }}>
              Adding Machine is an ode to those left behind by technological innovation. To those forced to start over. We are more than just a cog in the machine, and our very essence cannot be recreated by a computer. May this show remind you that you always have the freedom to break away from the super hyper adding machine.
            </p>
            <p style={{ textAlign: 'left', padding: '10px 0px' }}>
              - Alexandra Somodi
            </p>
          </div>
        </section>
      </main>
    </ADMLayout>
  )
}

export default Director
