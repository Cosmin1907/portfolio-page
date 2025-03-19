import React from 'react'
import './ProjectCard.css'
import { useTranslation } from 'react-i18next';


const ProjectCard = ({title, description, year, technologies, image, url}) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={image} alt="project" />
      </div>
      <div className="project-card-content">
        <h3>{title[i18n.language]}</h3>
        <p>
          {description[i18n.language]}
        </p>
        <p>{t('yearLabel')} {year}</p>
        <p>{t('technologiesLabel')} {technologies.split(', ').map((tech) => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}</p>
        <a href={url} target='_blank'>
        <button className="project-card-btn">{t('liveProjectButton')} <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
