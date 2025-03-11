import React from 'react'
import './ProjectCard.css'


const ProjectCard = ({title, description, year, technologies, image}) => {
  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={image} alt="project" />
      </div>
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>
          {description}
        </p>
        <h4>Project info:</h4>
        <p>Year: {year}</p>
        <p>Technologies: {technologies}</p>
        <button className="project-card-btn">View Project</button>
      </div>
    </div>
  )
}

export default ProjectCard
