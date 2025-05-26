import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    pokemons: []
}

export const fetchPokemonsWithDetails = createAsyncThunk(

)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {

            const currentPokemonIndex = state.pokemons.findIndex(
                (pokemon) => pokemon.id === action.payload.pokemonId
            );

            if (currentPokemonIndex >= 0) {
                state.pokemons[currentPokemonIndex].favorite = 
                !state.pokemons[currentPokemonIndex].favorite;
            }
        }
    }
})

export const { setPokemons, setFavorite } = dataSlice.actions;

export default dataSlice.reducer;