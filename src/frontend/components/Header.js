import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from "../logo.svg";
import { useAuth } from './auth/AuthContext';

function HeaderButton({ toggleNavbar, isOpen }) {
    return (
        <button
            type="button"
            className="navbar-toggle"
            aria-controls="navbar-menu"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={toggleNavbar}
        >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
    );
}

function nali(to, text) {
    return (
        <li className="navbar-item">
            <Link className="navbar-link" to={to}>
                {text}
            </Link>
        </li>
    );
}

function NavbarMenu({ closeNavbar }) {
    const { isAuthenticated, logout } = useAuth();

    return (
        <div id="navbar-menu" className="sidebar right" onClick={closeNavbar}>
            <ul className="navbar-links" onClick={(e) => e.stopPropagation()}>
                {nali("/", "Home")}
                {nali("/create-recipe", "Create Recipe")}
                {nali("/recipes", "Recipes")}
                {nali("/about", "About")}
                {!isAuthenticated && nali("/register", "Register")}
                {!isAuthenticated && nali("/login", "Login")}
                {isAuthenticated && nali("/dashboard", "Dashboard")}
                {isAuthenticated && (
                    <li className="navbar-item">
                        <Link className="navbar-link" to="/" onClick={logout}>
                            Logout
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
}

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <header id="navbar" className={isOpen ? "opened" : ""}>
            <nav className="navbar-container container">
                <Link to="/" className="home-link">
                    <div className="navbar-logo">
                        <img src={logo} className="navbar-logo-img" alt="logo" />
                    </div>
                    <div className="navbar-logo-txt">Randeat</div>
                </Link>
                <HeaderButton toggleNavbar={toggleNavbar} isOpen={isOpen} />
                <NavbarMenu closeNavbar={closeNavbar} />
            </nav>
        </header>
    );
}

export default Header;
