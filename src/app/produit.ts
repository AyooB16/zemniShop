import { Comment } from "./comment";
export class Produit {
    constructor(
        public id:number,
        public title:String,
        public category:String,
        public description: String,
        public price : number,
        public images :String[],
        public comments :Comment[],
        public disponibility:boolean,
        public stars:number,
        public dateMiseEnVente:Date ){}
       
}
