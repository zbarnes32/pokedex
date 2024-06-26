import { AppState } from "../AppState.js";
import { pokeApi } from "./AxiosService.js";

class PokemonService {
    async getPokemonDetails(pokemonName) {
        const response = await pokeApi.get(`pokemon/${name}`)
        console.log('Did we get it?', response.data)
    }
    async getPokemon(){
        const response = await pokeApi.get('pokemon?limit=100000&offset=0')
        console.log('getting the pokemon!', response.data)
        AppState.pokemon = response.data.results
    }


}

export const pokemonService = new PokemonService()