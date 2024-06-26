export class Pokemon {
    constructor(data){
        this.name = data.name
        this.nickname = data.nickname
        this.img = data.img
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
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