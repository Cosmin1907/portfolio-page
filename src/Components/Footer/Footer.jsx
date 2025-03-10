import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="back-link">
        <a href="#header">Back to top</a>
      </div>
      <div className="social-links">
        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
        <a href="http://x.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="http://github.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
        <a href="mailto:cosmintimofte@email.com" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-square-envelope"></i></a>
      </div>
    </footer>
  )
}

export default Footer
