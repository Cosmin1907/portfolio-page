import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <p>COSMIN TIMOFTE</p>
      </div>
      <nav className="nav" aria-label="Main Navigation">
        <ul>
          <li><a href="#about">Work</a></li>
          <li><a href="#projects">About</a></li>
          <li><a href="#contact">Download my CV</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
