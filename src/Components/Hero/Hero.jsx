import React from 'react'
import './Hero.css'

const hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>HI, I AM COSMIN TIMOFTE</h1>
        <p>A Romania based full-stack developer passionate about building accessible user friendly apps.</p>
        <div className="social-links">
          <p>GET IN TOUCH:</p>
          <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label='LinkedIn'><i class="fa-brands fa-linkedin"></i></a>
          <a href="mailto:cosmintimfote@email.com" target="_blank" rel="noopener noreferrer"><i class="fa-regular fa-envelope"></i></a>
        </div>
        <div className="github">
          <p>SEARCH MY GITHUB:</p>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="hero-right">
        <img src="" alt="my photo" />
      </div>
    </section>
  )
}

export default hero
