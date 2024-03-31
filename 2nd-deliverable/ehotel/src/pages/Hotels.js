import React from "react";
import Card from "../components/Card";
import "./Hotels.css"

import Image1 from "./OIP.jpg";
import Image2 from "./temphotel.jpeg";
const hotels = [
    {id: 1, name: "Mariott",imageUrl: Image1},
    {id: 2, name: "Hotel Escapade", imageUrl: Image2},
    {id: 3, name: "Nice Hotel",imageUrl: Image1},
    {id: 4, name: "sexy Hotel", imageUrl: Image2},
    {id: 5, name: "beautiful Hotel",imageUrl: Image1},
    {id: 6, name: "Hi Hotel", imageUrl: Image2},
];

export const Hotels = () => {
    return (
    <div className="hotels-container">
        <p className="hotels-description">
            Hi! there is nothing on this page right now. It will show the hotels available within this place.
            </p>
        <br/>
        {hotels.map(hotel => (
           <Card 
            hotelName={hotel.name}
            imageSrc={hotel.imageUrl}
            />
        ))}
    </div> 
    );
};

export default Hotels;