import axios from 'axios'

const baseUri = 'https://pokeapi.co/api/v2/pokemon';

export const getAllPokemons = async() => {
    
    return await axios.get(baseUri+"?limit=151&offset=0");
}

export const getPokemonDetail = async(name) => {
    return await axios.get(`${baseUri}/${name}`);
}