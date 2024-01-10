import {TempsService} from "../Servei/TempsService.js";
import {PaisosServei} from "../Servei/PaisosServei.js";

export class TempsControlador{

    #tempsService;
    #paisosService;

    constructor() {
        this.#tempsService = new TempsService();
        this.#paisosService = new PaisosServei();
    }

    findAllPaisos(){
        return this.#paisosService.paisos();
    }
    findTimePais(pais){
        return this.#tempsService.temps(pais);
    }
}