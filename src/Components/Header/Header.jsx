import React, {useState} from 'react'
import './Header.css'
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';

const Header = () => {
  const { t, i18n } = useTranslation();
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
        <span>{t('nameLabel')}</span>
      </div>
      <div className="languages">
      <button onClick={() => changeLanguage('en')}>
      <Flag className='flag' code="GB"/>
      </button>
      <button onClick={() => changeLanguage('ro')}>
      <Flag className='flag' code="RO"/>
      </button>
      </div>
      <button className='burger' onClick={toggleMenu} aria-expanded={isOpen}>
      <i class="fa-solid fa-bars"></i>
      </button>
      <nav className={isOpen ? "nav open" : "nav"} aria-label="Main Navigation">
        <ul>
        <li><a href="#work">{t('workLabel')}</a></li>
        <li><a href="#about">{t('aboutLabel')}</a></li>
        <li><a href={t('cvFile')} download>{t('cvLabel')}</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
