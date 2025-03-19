import React from 'react'
import './Work.css'
import Card from '../ProjectCard/ProjectCard'
import data from '../../data/data.json'
import { useTranslation } from 'react-i18next'

const Work = () => {
  const { t } = useTranslation();
  return (
    <section className="portfolio-container" id="work">
      <div className="portfolio-text">
        <h2>{t('portfolio')}</h2>
        <p>Below are a few selected projects that highlight my passion for app development and showcase my skills in building responsive and user-friendly applications.</p>
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
