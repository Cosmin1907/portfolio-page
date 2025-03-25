import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="back-link">
      
        <a href="#header"><i class="fa-solid fa-arrow-up-long"></i> Back to top <i class="fa-solid fa-arrow-up-long"></i></a>
      </div>
      <div className="social-links">
        <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-youtube"></i>
        </a>
        <a href="www.linkedin.com/in/timoftecosmin" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
        <a href="http://x.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="http://github.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
        <a href="mailto:timofte.cosmin@outlook.com" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-square-envelope"></i></a>
      </div>
    </footer>
  )
}

export default Footer
