import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import './anastasia.css'
import '../../../styles/fonts.css'
import '../../../styles/ant.css'
import { pit } from '../../../components/ANTTeamsHelper.js'
import ANTLayout from '../../../layouts/ANTLayout.js'

const Pit = () => {
  return (
    <ANTLayout>
      <main>
        <div className="ANT-teams-container">
          <h1 className="ANT-page-title">Pit Band</h1>
          {pit.map((member, index) => (
            <div
              className={`ANT-project-section ${index % 2 === 0 ? 'left' : 'right'}`}
              key={index}
            >
              <div className="ANT-project-content">
                {index % 2 === 0 ? (
                  <>
                    <div className="ANT-project-image">
                      <img src={member.img} alt={`${member.name} headshot`} />
                    </div>
                    <div className="ANT-project-text">
                      <h2 className="ANT-project-title">{member.role}</h2>
                      <h2 className="ANT-project-subtitle">{member.name}</h2>
                      <p
                        style={{ fontSize: '0.8rem' }}
                        className="ANT-project-description"
                      >
                        {member.bio}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="ANT-project-image">
                      <img src={member.img} alt={`${member.name} headshot`} />
                    </div>
                    <div className="ANT-project-text">
                      <h2 className="ANT-project-title">{member.role}</h2>
                      <h2 className="ANT-project-subtitle">{member.name}</h2>
                      <p
                        style={{ fontSize: '0.8rem' }}
                        className="ANT-project-description"
                      >
                        {member.bio}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </ANTLayout>
  )
}

export default Pit
