import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import './teams.css'
import { design } from '../../../components/LSOHTeamsHelper.js'
import LSOHLayout from '../../../layouts/LSOHLayout.js'

const Design = () => {
  return (
    <LSOHLayout>
      <main>
        <div className="teams-container">
          <h1 className="LSOH-page-title">Design Team</h1>
          {design.map((member, index) => (
            <div
              className={`LSOH-project-section ${index % 2 === 0 ? 'left' : 'right'}`}
              key={index}
            >
              <div className="LSOH-project-content">
                {index % 2 === 0 ? (
                  <>
                    <div className="LSOH-project-image">
                      <img src={member.img} alt={`${member.name} headshot`} />
                    </div>

                    <div
                      className={`LSOH-project-text ${index % 2 === 0 ? 'align-left' : 'align-right'}`}
                    >
                      <h2 className="LSOH-project-title">{member.name}</h2>
                      <h2 className="LSOH-project-subtitle">{member.role}</h2>
                      <p
                        style={{ fontSize: '0.8rem' }}
                        className="LSOH-project-description"
                      >
                        {member.bio}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="LSOH-project-image">
                      <img src={member.img} alt={`${member.name} headshot`} />
                    </div>

                    <div
                      className={`LSOH-project-text ${index % 2 === 0 ? 'align-left' : 'align-right'}`}
                    >
                      <h2 className="LSOH-project-title">{member.name}</h2>
                      <h2 className="LSOH-project-subtitle">{member.role}</h2>
                      <p
                        style={{ fontSize: '0.8rem' }}
                        className="LSOH-project-description"
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
    </LSOHLayout>
  )
}

export default Design
