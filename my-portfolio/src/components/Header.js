import React, { useState } from 'react';


const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const handleBurgerClick = () => {
    setNavActive(!navActive);
  };

  return (
    <header>
      <nav id="navbar">
        <div className="container">
          <div className="logo">Tom Mergui</div>
          <ul className={`nav-links ${navActive ? 'nav-active' : ''}`}>
            <li><a href="#a-propos">À Propos</a></li>
            <li><a href="#competences">Compétences</a></li>
            <li><a href="#formations">Formations</a></li>
            <li><a href="#experiences">Expériences</a></li>
            <li><a href="#interets">Centres d'Intérêt</a></li>
            <li><a href="#cv">Documents</a></li>
            <li><a href="#langues">Langues</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="burger" onClick={handleBurgerClick}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
