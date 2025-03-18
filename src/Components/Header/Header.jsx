import React, {useState} from 'react'
import './Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header" id="header">
      <div className="logo">
        <span>COSMIN TIMOFTE</span>
      </div>
      <button onClick={toggleMenu} aria-expanded={isOpen}>
      <i class="fa-solid fa-bars"></i>
      </button>
      <nav className={isOpen ? "nav open" : "nav"} aria-label="Main Navigation">
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
