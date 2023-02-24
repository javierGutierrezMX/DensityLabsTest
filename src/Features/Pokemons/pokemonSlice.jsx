import {createSlice} from '@reduxjs/toolkit'
import {getAllPokemons,getPokemonDetail} from '../../Services/PokeServices'


const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState: {
        allPokemons: [],
        detailPokemon: null,
    },
    reducers:{
        setAllPokemons: (state, action) => {
            state.allPokemons = action.payload;
        },
        setPokemon: (state, action) => {
            state.detailPokemon = action.payload;
        }
    }
})

export default pokemonSlice.reducer;

export const {setAllPokemons, setPokemon} = pokemonSlice.actions;

export const get_All_Pokemons = () => (dispatch) =>{
    getAllPokemons()
    .then((res) =>dispatch(setAllPokemons(res.data.results)))
    .catch((error) => console.log(error));
}

export const get_Pokemon = (name) => (dispatch) =>{
    getPokemonDetail(name)
    .then((res) => dispatch(setPokemon(res.data)))
    .catch((error) => console.log(error));
}