import {ClockService} from "../service/ClockService.js";

export class ClockController {
    #clockService;

    constructor() {
        this.#clockService = new ClockService();
    }

    async findAllPaisos() {
        return await this.#clockService.findAllPaisos();
    }

    async findTempsPais(pais) {
        return await this.#clockService.findTempsPais(pais);
    }
}