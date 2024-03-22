import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
    return (
      <Card sx={{ maxWidth: 350}} variant="outlined">
        <CardActionArea>
            <CardMedia
                component="img"
                height="150"
                image="temphotel.jpeg"
                alt="temp logo for now" 
                // hard-coded for now; will change it for the database later on.
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    React
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Beautiful hotel with a swanky and sexy room and tons of air conditioning. 
                    Come on in!
                </Typography>
            </CardContent>
        </CardActionArea>
      </Card>  
    );
}