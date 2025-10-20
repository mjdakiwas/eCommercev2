import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { IoCartSharp } from 'react-icons/io5';
import '../../styles/navbar.css';
import logo from '/logo.png';
import MenuButton from './MenuButton.jsx';

export default function NavBar({ pathname }) {
    const [isHamburgOpen, setHamburgOpen] = useState(false);
    useEffect(() => {
        setHamburgOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (isHamburgOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isHamburgOpen]);

    return (
        <nav className={isHamburgOpen ? 'navbar open' : 'navbar'}>
            <div className="navbar__header">
                <MenuButton
                    isHamburgOpen={isHamburgOpen}
                    setHamburgOpen={setHamburgOpen}
                />

                <NavLink to="/" className="navbar__logo">
                    <img src={logo} alt="Top O' Cherry Logo" />
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
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <button className="cartBtn">
                    <IconContext.Provider
                        value={{
                            color: '#186b80',
                            size: '2rem',
                        }}
                    >
                        <IoCartSharp />
                    </IconContext.Provider>
                </button>
            </div>
        </nav>
    );
}
