import React from 'react'
import './Work.css'

const Work = () => {
  return (
    <section className="portfolio-container">
      <div className="portfolio-text">
        <h2>PORTFOLIO PROJECTS</h2>
        <p>Below are a few selected projects that highlight my passion for app development.</p>
      </div>
      <div className="portfolio-cards">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </section>
  )
}

export default Work
