
export class Breed{

    #id;
    #nom;

    constructor(id,nom,) {
        this.#id = id;
        this.#nom = nom;
    }
    getId(){
        return this.#id;
    }
    setId(id){
        this.#id = id;
    }
    setNom(nom){
        this.#nom = nom;
    }
    getNom(){
        return this.#nom;
    }
}