import { AppState } from "../AppState.js"
import { pokemonService } from "../services/PokemonService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class PokemonController {
    constructor(){
       // ✅ console.log('Pokemon Controller reporting for duty!')
        AppState.on('pokemon', this.drawPokemon)
       this.getPokemon()
    }
    async getPokemon(){
     try {
         await pokemonService.getPokemon()
     } catch (error) {
         Pop.error(error)
         console.error("Unable to get Pokemon", error)
     }
    }

    drawPokemon(){
        const pokemon = AppState.pokemon
        let innerHTMLString = ''
        pokemon.forEach((poke) => {innerHTMLString += `<button class="d-block btn btn-outline-danger mb-1 w-100"><i class="mdi mdi-pokeball"></i>${poke.name}</button>`})
        setHTML('pokemonList', innerHTMLString)
    }
}