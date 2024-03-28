import React from "react";
import Card from "../components/Card";
import "./Hotels.css"


export const Hotels = () => {
    return (
    <div className="hotels-container">
        <p className="hotels-description">
            Hi! there is nothing on this page right now. It will show the hotels available within this place.
            </p>
        <br></br>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    </div> 
    );
};

export default Hotels;