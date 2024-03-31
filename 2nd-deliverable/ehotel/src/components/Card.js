import * as React from 'react';

/*import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';*/
import "./Card.css";


function Card({ hotelName, imageSrc }) {
    return (
        <a href="/hotel" className="card-link">
        <div className="card">
            <img className="card-image"src={imageSrc} alt={hotelName}></img>
            <h2 className="card-header">{hotelName}</h2>
            <p className="card-text">Hotel. Very good. Very sexy. I like. </p>
        </div>
        </a>
    );
};


/* <ul>
                <li></li>
                <li></li>
                <li></li>

            </ul>
    will add the features later with included icons.        
            */
// <li> will have the features available for each hotel. but if not; then we'll have nothing (especially if it's a hotel chain)
// later on; will replace the description with the {description} parameter. 
export default Card;