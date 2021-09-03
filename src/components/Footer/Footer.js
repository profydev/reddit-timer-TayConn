import React from 'react';
import './footer.css';
import logoSmall from '../../assets/logo_small.png';

function Footer() {
  return (
    <div className="footer__wrapper">
      <a href="https://github.com/TayConn" alt="Visit My Github">My Github</a>
      <img className="logo_small" src={logoSmall} alt="the icon from the reddit search logo" />
      <p alt="Click here to read the terms and privacy conditions">Terms & Privacy</p>
    </div>
  );
}

export default Footer;
