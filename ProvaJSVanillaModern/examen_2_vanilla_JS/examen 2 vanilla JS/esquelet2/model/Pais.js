export class Pais {
    #codi;
    #nom;

    constructor(codi, nom) {
        this.#codi = codi;
        this.#nom = nom;
    }

    getCodi() {
        return this.#codi;
    }

    getNom() {
        return this.#nom;
    }
}