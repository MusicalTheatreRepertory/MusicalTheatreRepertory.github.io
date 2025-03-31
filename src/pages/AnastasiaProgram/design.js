import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import '../anastasia.css';
import '../../styles/global.css'
import '../../styles/teams.css';
import { design } from '../../components/TeamsHelper.js';


const Design = () => {
    return (
    <main>
        <div className="teams-container">
    <h1 className="page-title">Design</h1>
    {design.map((member, index) => (
        <div className={`project-section ${index % 2 === 0 ? "left" : "right"}`} key={index}>
          <div className="project-content">
            {index % 2 === 0 ? (
                <>
                
            <div className="project-image">
              <img src={member.img} alt={`${member.name} headshot`} />
            </div>
                <div className="project-text">
                    <h2 className="project-title">{member.role}</h2>
                    <h2 className="project-subtitle">{member.name}</h2>
                    <p style ={{fontSize: "0.8rem"}} className="project-description">{member.bio}</p>
                    
                </div>
            </>
            ) : (
                <>
                <div className="project-image">
                    <img src={member.img} alt={`${member.name} headshot`} />
                </div>
                <div className="project-text">
                    <h2 className="project-title">{member.role}</h2>
                    <h2 className="project-subtitle">{member.name}</h2>
                    <p style ={{fontSize: "0.8rem"}} className="project-description">{member.bio}</p>
                </div>
                </>
            )}
            </div>
        </div>
      ))}
</div>

    </main>
    );
};

export default Design;