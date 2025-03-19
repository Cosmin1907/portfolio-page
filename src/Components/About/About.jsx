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
          <li><img src="/images/HTML5.svg" alt="html5" />HTML5</li>
          <li><img src="/images/CSS3.svg" alt="css3" />CSS3</li>
          <li><img src="/images/JavaScript.svg" alt="Javascript" />JavaScript</li>
          <li><img src="/images/Python.svg" alt="Python" />Python</li>
          <li><img src="/images/React.svg" alt="React" />React</li>
          <li><img src="/images/Django.svg" alt="Django" />Django</li>
          <li><img src="/images/Flask.svg" alt="Flask" />Flask</li>
          <li><img src="/images/PostgresSQL.svg" alt="" />PostgreSQL</li>
          <li><img src="/images/Git.svg" alt="git" />Git</li>
        </ul>
      </div>

    </section>
  )
}

export default About
