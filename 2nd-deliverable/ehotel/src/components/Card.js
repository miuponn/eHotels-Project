import * as React from 'react';

/*import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';*/

import tempHotelPic from './temphotel.jpeg';
import "./Card.css";


function Card() {
    return (
        <a href="/Hotel" className="card-link">
        <div className="card">
            <img className="card-image"src={tempHotelPic} alt="temporary hotel"></img>
            <h2 className="card-header">Hotel</h2>
            <p className="card-text">Hotel. Very good. Very Sexy. I like.</p>
        </div>
        </a>
    );
};

export default Card;