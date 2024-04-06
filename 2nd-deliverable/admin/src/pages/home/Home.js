import React from "react";
import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar.js";
import Navbar from "../../components/navbar/Navbar.js";
import Table from "../../components/table/Table.js";


const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="home-container">
                <div className="navbar-container">
                <Navbar />
                </div>
            </div>
            <div className="content-container">
                <div className="list-container">
                    <div className="list-title">Latest Bookings</div>
                    <Table />
                </div>
            </div>
        </div>
    )
};

export default Home;

