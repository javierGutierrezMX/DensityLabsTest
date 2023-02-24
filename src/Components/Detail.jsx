import  React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useSelector} from 'react-redux' 
import CardMedia from '@mui/material/CardMedia';


function Detail() {
  const [show, setShow] = useState(false);
  const {detailPokemon} = useSelector(state => state.pokemons);
  useEffect(() => {
    setShow(current => !current);
},[detailPokemon])
  return (
    show &&
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             {detailPokemon.name}
            </Typography>
            <Typography variant="h5" component="div">
             base experience:  {detailPokemon.base_experience}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
             Id: {detailPokemon.id}
            </Typography>
          </CardContent>
          <CardMedia
        component="img"
        height="800"
        image={detailPokemon.sprites.other['official-artwork'].front_default}
        alt={"imagen de " + detailPokemon.name}
        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
      />
      </Card>
    </Box>
    
  )
}

export default Detail