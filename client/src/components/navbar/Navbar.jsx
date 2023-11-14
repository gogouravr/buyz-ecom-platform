import React from 'react'
import './Navbar.scss';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='navbar__menu'>
                <li className='navbar__menu-item'>
                    <a href='/'>
                        <img className='navbar__logo' src="/buyZLogo.png" alt="buyz logo" />
                    </a>
                </li>
                <li className='navbar__menu-item'>
                    Search
                </li>
                <li className='navbar__menu-item'>
                    Profile
                </li>
                <li className='navbar__menu-item'>
                    Wishlist
                </li><li className='navbar__menu-item'>
                    Cart
                </li>
            </ul>
        </nav>
    )
}
