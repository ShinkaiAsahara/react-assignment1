import React from 'react';
import './App.css';
function Header() {
    return (
        <>
        <header className="header">
            <div className="logo">Logo</div>
            <nav className="nav">
                <a href="#home">Home</a>
                <a href="#about">About</a>
            </nav>
        </header>
        </>
    );
}

export default Header;
