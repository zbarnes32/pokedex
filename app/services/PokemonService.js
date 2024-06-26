import { AppState } from "../AppState.js";
import { pokeApi } from "./AxiosService.js";

class PokemonService {
    async getPokemon(){
        const response = await pokeApi.get('pokemon')
        console.log('getting the pokemon!', response.data)
        AppState.pokemon = response.data.results
    }
}

export const pokemonService = new PokemonService()