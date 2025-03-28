import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="back-link">
      
        <a href="#header"><i class="fa-solid fa-arrow-up-long"></i> Back to top <i class="fa-solid fa-arrow-up-long"></i></a>
      </div>
      <div className="social-links">
        <a href="https://youtube.com/@Cosmin.Timofte" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-youtube"></i>
        </a>
        <a href="https://linkedin.com/in/timoftecosmin" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/1barbarossa" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://x.com/cosmin1907" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="https://github.com/cosmin1907" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
        <a href="mailto:timofte.cosmin@outlook.com" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-square-envelope"></i></a>
      </div>
    </footer>
  )
}

export default Footer
