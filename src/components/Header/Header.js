import React from 'react';
import './header.css';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <nav>
      <img className="logo" src={logo} alt="the reddit timer logo" />
      <ul className="NavBar">
        <li title="Click here to search" href="#search">Search</li>
        <li title="Click here to learn how this app works" href="#howWork">How it works</li>
        <li title="Click here to learn more about this app" href="#about">About</li>
      </ul>
    </nav>
  );
}

export default Header;
