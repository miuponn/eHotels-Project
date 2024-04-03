import * as React from 'react';

/*import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';*/
import "./Card.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WifiIcon from "@mui/icons-material/Wifi"
import PoolIcon from "@mui/icons-material/Pool"
import TvIcon from "@mui/icons-material/Tv";
import {Link, NavLink} from "react-router-dom";

const FeatureIcon = (elem) => {
    console.log(elem)
    if (elem === "air conditioning") {
        return (
            <AcUnitIcon />
        );
    } else if(elem === "wifi") {
        return (<WifiIcon />);
    } else if(elem === "pool") {
        return (<PoolIcon />);
    } else if (elem ==="TV") {
        return (<TvIcon />);
    }
}

function Card({ hotelName, imageSrc, features}) {
    return (
        <NavLink to="/hotel" className="card-link">
            <div className="card">
                <img className="card-image"src={imageSrc} alt={hotelName} />
                <h2 className="card-header">{hotelName}</h2>
                <p className="card-text">Hotel. Very good. Very sexy. I like. </p>
                <ul className="features">
                    {features?.map((elem) => (
                    <li className="bullet-point"> <FeatureIcon elem={elem} className="bullet-icon"/>{elem}</li>
                ))}
                </ul>
                <br/>
            </div>
        </NavLink>
    );
};


/* <ul>
                <li></li>
                <li></li>
                <li></li>
{features.map((elem, index) => {
                    return <li key={index}>${elem}</li>
                })}
            </ul>
    will add the features later with included icons.        
            */
// <li> will have the features available for each hotel. but if not; then we'll have nothing (especially if it's a hotel chain)
// later on; will replace the description with the {description} parameter. 
export default Card;