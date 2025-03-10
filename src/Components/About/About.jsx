import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="about-container">
      <div className="about-text">
        <h2>ABOUT ME</h2>
        <h3>I am a full stack developer based in Romania.</h3>
        <p>A Romania based full-stack developer passionate about building accessible and user friendly web apps.</p>
      </div>
      <div className="about-skills">
        <h3>The skills, tools and technologies I am good at:</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Git</li>
          <li>GitHub</li>
        </ul>
      </div>
    </section>
  )
}

export default About
