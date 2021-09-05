import React from 'react';
import './footer.css';
import logoSmall from '../../assets/logo_small.png';

function Footer() {
  return (
    <footer className="footer__wrapper">
      <a href="www.profy.dev/employers" alt="Profy.dev">Profy.dev</a>
      <img className="logo_small" src={logoSmall} alt="the icon from the reddit search logo" />
      <a href="/terms" alt="Click here to read the terms and privacy conditions">Terms & Privacy</a>
    </footer>
  );
}

export default Footer;
