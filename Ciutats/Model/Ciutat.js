export class Ciutat{

    #nom;
    #pais;

    constructor(nom, pais) {
        this.#nom = nom;
        this.#pais = pais;
    }

    getNom(){
        return this.#nom;
    }
    getPais(){
        return this.#pais;
    }

}