import React from 'react'
import './Hero.css'
import GitHub from '../GitHubProfile/GitHubProfile'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>HI, I AM <br />COSMIN TIMOFTE</h1>
        <p>A Romania based full-stack developer passionate about building accessible user friendly apps.</p>
        <div className="social-links">
          <p>GET IN TOUCH:</p>
          <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label='LinkedIn'><i class="fa-brands fa-linkedin"></i></a>
          <a href="mailto:cosmintimfote@email.com" target="_blank" rel="noopener noreferrer"><i class="fa-regular fa-envelope"></i></a>
        </div>
        <div className="github">
          <GitHub />
        </div>
      </div>
      <div className="hero-right">
        <img src="/images/eu.jpg" alt="my photo" />
      </div>
    </section>
  )
}

export default Hero
