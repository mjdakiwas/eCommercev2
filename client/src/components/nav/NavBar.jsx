import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/navbar.css';
import logo from '/logo.png';
import MenuButton from './MenuButton.jsx';

export default function NavBar({ pathname }) {
    const [isHamburgOpen, setHamburgOpen] = useState(false);

    return (
        <nav className={isHamburgOpen ? 'navbar open' : 'navbar'}>
            <MenuButton
                isHamburgOpen={isHamburgOpen}
                setHamburgOpen={setHamburgOpen}
            />
            <NavLink to="/" className="navbar__logo">
                <img src={logo} alt="Top O' Cherry Logo"></img>
            </NavLink>
            <div className="navbar__content">
                <ul className="navbar__links-list">
                    <li>
                        <NavLink
                            to="/shop"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            {' '}
                            Products
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            {' '}
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
