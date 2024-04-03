import React from "react";
import Card from "../components/Card";
import "./Hotels.css"

import Image1 from "./OIP.jpg";
import Image2 from "./temphotel.jpeg";
const hotels = [
    {
    id: 1,
    name: "Mariott",
    imageUrl: Image1,
    features: ["air conditioning", "wifi", "pool", "strippers", "near transportation"]
        },
    {id: 2,
        name: "Hotel Escapade", 
        imageUrl: Image2,
        features: ["air conditioning", "wifi", "strippers", "TV"]
    },
    {id: 3, name: "Nice Hotel",imageUrl: Image1},
    {id: 4, name: "sexy Hotel", imageUrl: Image2},
    {id: 5, name: "beautiful Hotel",imageUrl: Image1},
    {id: 6, name: "Hi Hotel", imageUrl: Image2},
];

export const Hotels = () => {
    return (
    <div className="hotels-container">
        <div className="hotels-text-container">
            <p className="hotels-description">
            Please choose the following hotel chains available for booking. Please use the filters to specify the hotels to your liking.
                </p>
        </div>
        <div className="search-bar">

            
        </div>
        <br/>
        {hotels.map(hotel => (
           <Card 
            hotelName={hotel.name}
            imageSrc={hotel.imageUrl}
            features={hotel.features}
            />
        ))}
    </div> 
    );
    
};

export default Hotels;