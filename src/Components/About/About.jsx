import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-text">
        <h2>ABOUT ME</h2>
        <h3>I am a full stack developer based in Romania.</h3>
        <p>A Romania based full-stack developer passionate about building accessible and user friendly web apps.</p>
      </div>
      <div className="about-skills">
        <h3>The skills, tools and technologies I am good at:</h3>
        <ul>
          <li><i className="fa-brands fa-html5" style={{ color: '#E34F26' }}></i> HTML5</li>
          <li><i className="fa-brands fa-css3-alt" style={{ color: '#1572B6' }}></i> CSS3</li>
          <li><i className="fa-brands fa-js" style={{ color: '#F7DF1E' }}></i> JavaScript</li>
          <li><i className="fa-brands fa-python" style={{ color: '#3776AB' }}></i> Python</li>
          <li><i className="fa-brands fa-react" style={{ color: '#61DAFB' }}></i> React</li>
          <li><i className="fa-brands fa-django" style={{ color: '#092E20' }}></i> Django</li>
          <li><i className="fa-brands fa-flask" style={{ color: '#000000' }}></i> Flask</li>
          <li><i className="fa-brands fa-git-alt" style={{ color: '#F05032' }}></i> Git</li>
        </ul>
      </div>

    </section>
  )
}

export default About
