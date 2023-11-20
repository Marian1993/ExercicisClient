export class Persona{
    #nom; //privat
    #cognom = "Martorell" //privat inicialitzat
    #edat; //públic

    constructor(nom,edat) {
        this.#nom = nom;
        this.#edat = edat;
    }

    getNomComplet(){
        return this.#nom + " " + this.#cognom;
    }
    getNom(){
        return this.#nom
    }

}