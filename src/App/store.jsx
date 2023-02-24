import {configureStore} from '@reduxjs/toolkit'
import pokemonReducer from '../Features/Pokemons/pokemonSlice'

export const store = configureStore({
    reducer:
    {
    pokemons: pokemonReducer
    }
})