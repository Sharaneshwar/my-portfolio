import React, { useState } from 'react';
import "./header.css";

const Header = () => {
    /*=============== Toggle Menu ===============*/
    const [menu, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('#home');

    const handleNavClick = (hash) => {
        setActiveNav(hash);
        showMenu(false);
    };

    return (
        <header className="header">
            <nav className="nav container">
                <a href="/" className='nav__logo'>Sharaneshwar</a>

                <div className={menu ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className={`nav__link ${activeNav === '#home' ? 'active-link' : ''}`} onClick={() => handleNavClick('#home')}>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className={`nav__link ${activeNav === '#about' ? 'active-link' : ''}`} onClick={() => handleNavClick('#about')}>
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className={`nav__link ${activeNav === '#skills' ? 'active-link' : ''}`} onClick={() => handleNavClick('#skills')}>
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#projects" className={`nav__link ${activeNav === '#projects' ? 'active-link' : ''}`} onClick={() => handleNavClick('#projects')}>
                                <i className="uil uil-briefcase-alt nav__icon"></i> Projects
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#education" className={`nav__link ${activeNav === '#education' ? 'active-link' : ''}`} onClick={() => handleNavClick('#education')}>
                                <i className="uil uil-scenery nav__icon"></i> Education
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className={`nav__link ${activeNav === '#contact' ? 'active-link' : ''}`} onClick={() => handleNavClick('#contact')}>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" id="nav-close" onClick={() => showMenu(!menu)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!menu)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
