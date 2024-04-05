import React from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-wrapper">
                <div className="search">
                    <input type="text" placeholder="search here."/>
                    <SearchIcon />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
