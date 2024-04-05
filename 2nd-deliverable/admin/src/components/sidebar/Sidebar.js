import React from "react";
import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person from "@mui/icons-material/Person";
import HotelIcon from "@mui/icons-material/Hotel";
import AccountBox from "@mui/icons-material/AccountBox";
import Logout from "@mui/icons-material/Logout";
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">Brotels Admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN AREA</p>
                    <li> 
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                        </li>
                        <p className="title">LISTS</p>
                        <Link to="/users" style={{textDecoration: "none"}}>
                            <li> 
                            <Person className="icon"/>
                            <span>Users</span>
                            </li>
                        </Link>

                        <Link to="/employees" style={{textDecoration: "none"}}>
                            <li> 
                            <Person className="icon"/>
                            <span>Employees</span>
                            </li>
                        </Link>
                        <Link to="/hotels" style={{textDecoration: "none"}}>
                            <li> 
                            <HotelIcon className="icon"/>
                            <span>Hotels</span>
                            </li>
                        </Link>
                        <Link to="/room" style={{textDecoration: "none"}}>
                            <li> 
                            <HotelIcon className="icon"/>
                            <span>Rooms</span>
                            </li>
                        </Link>
                        <p className="title">USER</p>
                        <li> 
                        <AccountBox className="icon" />
                        <span>Profile</span>
                        </li>
                        <li> 
                        <Logout className="icon"/>
                        <span>Logout</span>
                        </li>

                </ul>
            </div>
        </div>
    )
};

export default Sidebar;