import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import './teams.css'
import { pit } from '../../../components/SPATeamsHelper.js'
import SPALayout from '../../../layouts/SPALayout.js'

const Pit = () => {
  return (
    <SPALayout>
      <main>
        <div className="spa-teams-container">
          <h1 className="SPA-page-title">Pit</h1>
          {pit.map((member, index) => (
            <div
              className={`SPA-project-section ${index % 2 === 0 ? 'left' : 'right'}`}
              key={index}
            >
              <div className="SPA-project-content">
                {index % 2 === 0 ? (
                  <>
                    <div className="SPA-project-image">
                      <img src={member.img} alt={`${member.name} headshot`} />
                    </div>

                    <div
                      className={`SPA-project-text ${index % 2 === 0 ? 'align-left' : 'align-right'}`}
                    >
                      <h2 className="SPA-project-title">{member.name}</h2>
                      <h2 className="SPA-project-subtitle">{member.role}</h2>
                      <p
                        style={{ fontSize: '0.8rem' }}
                        className="SPA-project-description"
                      >
                        {member.bio}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="SPA-project-image">
                      <img src={member.img} alt={`${member.name} headshot`} />
                    </div>

                    <div
                      className={`SPA-project-text ${index % 2 === 0 ? 'align-left' : 'align-right'}`}
                    >
                      <h2 className="SPA-project-title">{member.name}</h2>
                      <h2 className="SPA-project-subtitle">{member.role}</h2>
                      <p
                        style={{ fontSize: '0.8rem' }}
                        className="SPA-project-description"
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
    </SPALayout>
  )
}

export default Pit
