export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.nickname = data.nickname
        this.img = data.img
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
    }

    get pokedexEntryTemplate() {
        return `
                <div class="col-12">
                    <h2>${this.name}</h2>
                    <p>${this.nickname}</p>
                    <div>
                        <img class="sprites-styling" src="${this.img}" alt="pokemon name">
                    </div>
                    <div>
                        <p class="fs-4">${this.types}</p>
                        <p>${this.weight}</p>
                        <p>${this.height}</p>
                    </div>
                </div>
        `
    }
}

// const sandboxApiExample(){
//     name: String, required
// nickName: String, 
// img: String, required
// weight: String, 
// height: String, 
// types: undefined, 
// creatorId: SchemaObjectId, required
// *creator: Object (Virtual Added by Database)
// *createdAt: ISO Timestamp (Virtual Added by Database)
// *updatedAt: ISO Timestamp (Virtual Added by Database)
// }

// const rawPokemonApiExample(){
//   height
//   id
//   name
//   spirts
//   types
//   weight
// }