import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import './teams.css'
import { cast } from '../../../components/ADMTeamsHelper.js'
import ADMLayout from '../../../layouts/ADMLayout.js'

const Cast = () => {
  return (
    <ADMLayout>
      <main>
        <div className="adm-teams-container">
          <h1 className="ADM-page-title">Cast</h1>
          {cast.map((member, index) => (
            <div
              className={`ADM-project-section ${index % 2 === 0 ? 'left' : 'right'}`}
              key={index}
            >
              <div className="ADM-project-content">
                {index % 2 === 0 ? (
                  <>
                    <div className="ADM-project-image">
                      <img src={member.img} alt={`${member.name} headshot`} />
                    </div>

                    <div
                      className={`ADM-project-text ${index % 2 === 0 ? 'align-left' : 'align-right'}`}
                    >
                      <h2 className="ADM-project-title">{member.name}</h2>
                      <h2 className="ADM-project-subtitle">{member.role}</h2>
                      <p
                        style={{ fontSize: '0.8rem' }}
                        className="ADM-project-description"
                      >
                        {member.bio}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="ADM-project-image">
                      <img src={member.img} alt={`${member.name} headshot`} />
                    </div>

                    <div
                      className={`ADM-project-text ${index % 2 === 0 ? 'align-left' : 'align-right'}`}
                    >
                      <h2 className="ADM-project-title">{member.name}</h2>
                      <h2 className="ADM-project-subtitle">{member.role}</h2>
                      <p
                        style={{ fontSize: '0.8rem' }}
                        className="ADM-project-description"
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
    </ADMLayout>
  )
}

export default Cast
