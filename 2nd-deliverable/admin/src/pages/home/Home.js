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
            <Navbar />
            home container
            </div>
            <div className="list-container">
                <div className="list-title">Latest Bookings</div>
                <Table />
            </div>
        </div>
    )
};

export default Home;

