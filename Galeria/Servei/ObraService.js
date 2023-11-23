import {Obra} from "../Model/Obra.js";

export class ObraService {
    async findAll() {
        const peticio = await fetch(`https://theteacher.codiblau.com/public/exercicis/galeria/list`)

        const galeriaResolt = await peticio.json();

        return galeriaResolt.map(obra => this.#jsonToObra(obra))
    }

    #jsonToObra(json){
        return new Obra(json.iditem,json.titol,json.url,json.categoria);
    }
}