import './Navbar.css';
import ReactDOM from 'react-dom/client';
import React, {useState} from "react";

import "./Navbar.css";
import {Link, NavLink} from "react-router-dom";

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
    <nav>
        <Link to="/" className="title">Brotels.com</Link>
        <ul className="navBar">
            <li>
                <NavLink to ="/hotels">Hotels</NavLink>
            </li>
            <li>
                <NavLink to ="/discover">Discover</NavLink>
            </li>
            <li>
                <NavLink to ="/login">log in/sign up</NavLink>
            </li>
        </ul>
    </nav>
    );
};

export default Navbar;