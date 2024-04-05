import React from 'react';
import "./Home.css";
import Navbar from "../../components/navbar/Navbar.js";
import Header from "../../components/header/Header.js";
import Featured from "../../components/featured/Featured.js";
import PropertyList from '../../components/propertyList/PropertyList.js';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties.js';
import MailFooter from '../../components/mailFooter/MailFooter.js';


const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homecontainer">
                <Featured />
                <h1 className="homeTitle">
                    Browse by hotel chains
                    </h1>
                <PropertyList />
                <h1 className="homeTitle">
                    Homes other bros loved
                    </h1>
                <FeaturedProperties />
                <MailFooter />
            </div>
        </div>
    );
};


export default Home;