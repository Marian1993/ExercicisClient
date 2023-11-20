export class Categoria{
    #id;
    #nom;

    constructor(id, nom) {
        this.#id = id;
        this.#nom = nom;
    }

    getId(){
        return this.#id;
    }
    getNom(){
        return this.#nom;
    }

}