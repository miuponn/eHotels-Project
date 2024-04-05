import React from 'react';
import "./Navbar.css"


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-container">
                <span className="logo">Brotels.com</span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}


export default Navbar