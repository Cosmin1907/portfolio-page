import React from 'react'
import './ProjectCard.css'

const ProjectCard = () => {
  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src="https://via.placeholder.com/150" alt="project" />
      </div>
      <div className="project-card-content">
        <h3>Project Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h4>Project info:</h4>
        <p>Year: </p>
        <p>Technologies: </p>
        <Button/>
      </div>
    </div>
  )
}

export default ProjectCard
