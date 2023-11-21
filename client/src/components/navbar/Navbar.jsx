import React from 'react';

import './Navbar.scss';
import GlobalSearch from '../globalSearch/GlobalSearch';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">
        <img className="navbar__logo" src="/buyZLogo.png" alt="buyz logo" />
      </a>
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <GlobalSearch />
        </li>
        <li className="navbar__menu-item">Profile</li>
        <li className="navbar__menu-item">Wishlist</li>
        <li className="navbar__menu-item">Cart</li>
      </ul>
    </nav>
  );
}
