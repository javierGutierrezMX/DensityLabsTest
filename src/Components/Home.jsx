import React, {useEffect, useState} from 'react'
import { useSelector} from 'react-redux'
import {Box, Grid, styled, Container} from "@mui/material";
import List from "./List";
import PokeCard from './Card';

const initialState = {
    name: '',
    imgSource: ''
}

const Wrapper = styled(Box)({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: 8,
    marginTop: 16
  });

export default function Home() {
    const [pokeDetail, setpokeDetail] = useState(initialState);
    const {detailPokemon} = useSelector(state => state.pokemons);

    useEffect(() => {
        if(detailPokemon !== null)
        setpokeDetail({name: detailPokemon.name, imgSource: detailPokemon.sprites.other['official-artwork'].front_default})
    
    },[detailPokemon])

  return (
    <Container>
      <Grid xs={12} sx={{ border: "1px solid #ccc" }} container>
        <Grid xs={6} sx={{ border: "1px solid #ccc" }} item>
        </Grid>
        <Grid xs={6} sx={{ border: "1px solid #ccc" }} item>
        </Grid>
      </Grid>
      <Wrapper>
        <Box >
            {pokeDetail.name !== '' &&
            <PokeCard name={pokeDetail.name} imgSource={pokeDetail.imgSource}/>}
        </Box>
        <Box > <List></List></Box>
      </Wrapper>
    </Container>
  )
}
