import {CiutatService} from "../Servei/CiutatService.js";

export class CiutatControlador{

    #ciutatService;

    constructor() {
        this.#ciutatService = new CiutatService();
    }

    async findAllCiutats(){
        return await this.#ciutatService.findAll();
    }
}