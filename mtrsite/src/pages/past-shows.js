import React from 'react';
import "../styles/index.css"
import "../styles/pastshows.css"
import logo from "../images/simple-logo-white.png"

const projects = [
    {
        title: "Anastasia",
        subtitle: "Directed by Grayson Abdalla",
        description: "really cool",
        image: logo,
    },
];

export default function PastShows() {
  return (
    <main>
    <div className="projects-container">
        {/* Current projects */ }
      <h1 className="page-title" id="current-projects">current projects</h1>
      <p className="page-subtitle">explore our projects for the 2024-2025 academic year!</p>
      {projects.map((project, index) => (
        <div className="project-section" key={index}>
          <div className="project-content">
          <div className="project-text">
              <h2 className="project-title">{project.title}</h2>
              <h3 className="project-subtitle">{project.subtitle}</h3>
            </div>
            <div className="project-image">
                <div>
              <img src={project.image} alt={`${project.title} image`} />
              </div>
              <div>
                <p className="project-description">{project.description}</p>
                </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </main>
  )
};
