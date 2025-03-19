import React from 'react'
import './Hero.css'
import GitHub from '../GitHubProfile/GitHubProfile'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>{t('h1Label')}<br />{t('nameLabel')}</h1>
        <p>{t('herodescription')}</p>
        <div className="social-links">
          <p>{t('contact')}:</p>
          <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label='LinkedIn'><i class="fa-brands fa-linkedin"></i></a>
          <a href="mailto:cosmintimfote@email.com" target="_blank" rel="noopener noreferrer"><i class="fa-regular fa-envelope"></i></a>
        </div>
        <div className="github">
          <GitHub />
        </div>
      </div>
      <div className="hero-right">
        <img src="/images/eu.png" alt="my photo" />
      </div>
    </section>
  )
}

export default Hero
