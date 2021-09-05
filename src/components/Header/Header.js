import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './header.css';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <header>
      <nav>
        <HashLink to="/">
          <img className="logo" src={logo} alt="the reddit timer logo" />
        </HashLink>
        <div className="NavBar">
          <HashLink title="Click here to search" to="/search/javascript" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Search</HashLink>
          <HashLink title="Click here to learn how this app works" to="#how-it-works" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>How it works</HashLink>
          <HashLink title="Click here to learn more about this app" to="#about" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>About</HashLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
