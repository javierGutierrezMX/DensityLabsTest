import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function PokeCard(props) {
  return (
    <Card sx={{ maxWidth: 500 }}>
    <CardActionArea>
    <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          {props.name}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="800"
        image={props.imgSource}
        alt={"imagen de " + props.name}
        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
      />
    </CardActionArea>
  </Card>
  )
}