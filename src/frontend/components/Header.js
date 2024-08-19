import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Header.css';
import logo from "../logo.svg";

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
    return <li className="navbar-item">
        <Link className="navbar-link" to={to}>
            {text}
        </Link>
    </li>
}

function NavbarMenu({closeNavbar, isOpen}) {
    return (
        <div
            id="navbar-menu"
            className="sidebar right"
            onClick={closeNavbar}
        >
            <ul className="navbar-links" onClick={(e) => e.stopPropagation()}>
                {nali("/", "Home")}
                {nali("/create-recipe", "Create Recipe")}
                {nali("/recipes", "Recipes")}
                {nali("/about", "About")}
                {nali("/register", "Register")}
                {nali("/login", "Login")}
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
                        <img src={logo} className="navbar-logo-img" alt="logo"/>
                    </div>
                    <div className="navbar-logo-txt">Randeat</div>
                </Link>
                <HeaderButton toggleNavbar={toggleNavbar} isOpen={isOpen} />
                <NavbarMenu closeNavbar={closeNavbar} isOpen={isOpen} />
            </nav>
        </header>
    );
}

export default Header;
