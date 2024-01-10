import {ClockService} from "../service/ClockService.js";

export class ClockController {
    #clockService;

    constructor() {
        this.#clockService = new ClockService();
    }


}