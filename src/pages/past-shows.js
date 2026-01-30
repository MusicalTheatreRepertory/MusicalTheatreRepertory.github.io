import React from 'react'
import '../styles/index.css'
import '../styles/pastshows.css'
import logo from '../images/simple-logo-white.png'
import littleshop from '../images/littleshopcover.jpg'
import anastasia from '../images/anastasiacover.jpg'
import falsettos from '../images/falsettoscover.jpg'

const shows = [
  {
    title: 'Little Shop of Horrors',
    season: 'Fall 2025',
    director: 'Directed by Zora Payne',
    image: littleshop,
    program: '/shows/lsoh/lsoh',
  },
  {
    title: 'Anastasia',
    season: 'Spring 2025',
    director: 'Directed by Grayson Abdalla',
    image: anastasia,
    program: '/shows/anastasia/anastasia',
  },
  {
    title: 'Falsettos',
    season: 'Fall 2024',
    director: 'Directed by Anton Peter',
    image: falsettos,
    program: '',
  },
  {
    title: 'A New Brain',
    season: 'Spring 2024',
    director: 'Directed by Maycee Campano',
    image: logo,
    program: '/shows/lsoh/lsoh',
  },
]

export default function PastShows() {
  return (
    <main>
      <div className="frame">
        <header className="header">
          <img src={logo} alt="MTR Logo" className="logo" />
          <nav className="nav">
            <a href="/">home</a>
            <a href="/meet-the-board">meet the board</a>
            <a href="/past-shows">past shows</a>
            <a href="/get-involved">get involved</a>
          </nav>
        </header>

        <div className="projects-container">
          {/* Current projects */}
          <h1 className="pastshows-title" id="current-projects">
            past shows
          </h1>
          {shows.map((show, index) => (
            <a
              href={show.program}
              rel="noopener noreferrer"
              key={index}
              className="team-link"
              text-decoration="none"
            >
              <div className="project-section" key={index}>
                <div className="project-content">
                  <div className="project-text">
                    <h2 className="show-title">{show.title}</h2>
                    <h3 className="show-season">{show.season}</h3>
                    <h3 className="show-director">{show.director}</h3>
                  </div>
                  <div className="show-image">
                    <div>
                      <img src={show.image} alt={`${show.title} image`} />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
