import './Navbar.css';
import * as React from 'react';
import ReactDOM from 'react-dom/client';


import "./Navbar.css";
import {Link, NavLink} from "react-router-dom";

export const Navbar = () => {
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
                <NavLink to ="/contact">Contact</NavLink>
            </li>
        </ul>
    </nav>
    );
};

export default Navbar;