export class Pais{
    #nom

    constructor(nom) {
        this.#nom = nom;
    }
    getNom(){
        return this.#nom
    }
    setNom(nom){
        this.#nom = nom;
    }
}