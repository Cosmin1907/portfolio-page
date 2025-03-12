import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="logo">
        <p>COSMIN TIMOFTE</p>
      </div>
      <nav className="nav" aria-label="Main Navigation">
        <ul>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Download my CV</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
