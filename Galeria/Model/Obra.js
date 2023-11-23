export class Obra{
    #id;
    #nom;
    #url;
    #categoria;
    #categoriaObj;

    constructor(id,nom,url,categoria) {
        this.#id = id;
        this.#nom = nom;
        this.#url = url;
        this.#categoria = categoria;
    }

    getId(){
        return this.#id;
    }
    getNom(){
        return this.#nom;
    }
    getUrl(){
        return this.#url;
    }
    getCategoria(){
        return this.#categoria;
    }
    getCategoriaObj(){
        return this.#categoriaObj;
    }
    setCategoriaObj(categoria){
        this.#categoriaObj = categoria;
    }
}