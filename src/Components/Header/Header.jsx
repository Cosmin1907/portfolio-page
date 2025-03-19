import React, {useState} from 'react'
import './Header.css'
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header" id="header">
      <div className="logo">
        <span>COSMIN TIMOFTE</span>
      </div>
      <div className="languages">
      <button onClick={() => changeLanguage('en')}>🇬🇧 English</button>
      <button onClick={() => changeLanguage('ro')}>🇷🇴 Română</button>
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
