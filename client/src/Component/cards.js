import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import playButton from '../Assets/playButton.jpg';
import "../style/main.css";

export default function ActionAreaCard(value) {
  return (
    <div>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      {/* <img src={playButton} className="thumbNail" alt="Click here to see us on YouTube" /> */}
        <CardMedia
          component="img"
          height="280"
          image={value.image}
          alt="Chariot"
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {value.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {value.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}