export class Image{

    #url;
    #nom;

    constructor(id,nom,) {
        this.#url = id;
        this.#nom = nom;
    }
    getUrl(){
        return this.#url;
    }
    setUrl(id){
        this.#url = id;
    }
    setNom(nom){
        this.#nom = nom;
    }
    getNom(){
        return this.#nom;
    }
}