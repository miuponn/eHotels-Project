import React from "react";
import "./hotel.css";
import "../../components/navbar/Navbar.js";
import "../../components/header/Header.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Photo from "../../components/OIP.jpg";
import Photo1 from "../../components/Designer.png";

import Navbar from "../../components/navbar/Navbar.js";
import Header from "../../components/header/Header.js";
import Mailfooter from "../../components/mailFooter/MailFooter.js";
const Hotel = () => {
    const photos = [
        {src: {Photo}},
        {src: {Photo1}}
    ];

    return (
        <div>
            <Navbar />
            <Header type="list"/>
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <button className="bookNow">Book now</button>
                    <h1 className="hoteltitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>117 Rideau Street, Ottawa Canada</span>
                    </div>
                    <span className="hotelDistance">
                        Terrible location - 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay for $17,428 at this property and get a free hotel blanket
                    </span>
                    <div className="hotelImages">
                        {photos.map(photo => (
                            <div className="hotelImgWrapper"> 
                                <img className="hotelImg" alt="hotel" src={photo.src}/>
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsText">
                            <h1 className="hotelTitle">Stay in the center of hell.</h1>
                            <p className="hotelDesc">
                                Located 10 minutes from the center of Ottawa, Canada. Absolute hell hole. don't buy this.
                            </p>
                        </div> 
                    <div className="hotelDetailsPrice">
                        <h1>Perfect for a 9-night stay!</h1>
                        <span>
                            Located in the terrible heart of Ottawa, Canada, this property
                            has a terrible view and a terrible score of 1.5!
                        </span>
                        <h2>
                            <b>$17,428</b> (9 nights)
                        </h2>
                        <button>Reserve now!</button>
                        </div>  
                    </div>
                </div>
            </div>
        <Mailfooter />
    </div>
    )
}

export default Hotel;