import React from 'react'
import './About.css'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="about-container" id="about">
      <div className="about-text">
        <h2>{t('aboutTitle')}</h2>
        <h3>{t('aboutSubtitle')}</h3>
        <p>{t('aboutDescription')}</p>
      </div>
      <div className="about-skills">
        <h3>{t('aboutSkills')}</h3>
        <ul>
          <li><i className="fa-brands fa-html5" style={{ color: '#E34F26' }}></i> HTML5</li>
          <li><i className="fa-brands fa-css3-alt" style={{ color: '#1572B6' }}></i> CSS3</li>
          <li><i className="fa-brands fa-js" style={{ color: '#F7DF1E' }}></i> JavaScript</li>
          <li><i className="fa-brands fa-python" style={{ color: '#3776AB' }}></i> Python</li>
          <li><i className="fa-brands fa-react" style={{ color: '#61DAFB' }}></i> React</li>
          <li><i className="fa-solid fa-d" style={{ color: '#fff' }}></i> Django</li>
          <li><i className="fa-brands fa-flask" style={{ color: '#000000' }}></i> Flask</li>
          <li><i className="fa-brands fa-git-alt" style={{ color: '#F05032' }}></i> Git</li>
        </ul>
      </div>

    </section>
  )
}

export default About
