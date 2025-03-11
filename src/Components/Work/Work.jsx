import React from 'react'
import './Work.css'
import Card from '../ProjectCard/ProjectCard'
import data from '../../data/data.json'

const Work = () => {
  return (
    <section className="portfolio-container">
      <div className="portfolio-text">
        <h2>PORTFOLIO PROJECTS</h2>
        <p>Below are a few selected projects that highlight my passion for app development.</p>
      </div>
      <div className="portfolio-cards">
        {data.map((project) => (
          <Card 
            key={project.id}
            title={project.title}
            description={project.description}
            year={project.year}
            technologies={project.technologies}
            image={project.image}
            url={project.url}
          />  
        ))}
      </div>
    </section>
  )
}

export default Work
