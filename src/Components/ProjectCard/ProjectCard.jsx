import React from 'react'
import './ProjectCard.css'


const ProjectCard = ({title, description, year, technologies, image, url}) => {
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
        <p>Year: {year}</p>
        <p>Technologies: {technologies.split(', ').map((tech) => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}</p>
        <a href={url} target='_blank'>
        <button className="project-card-btn">Live Project <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
