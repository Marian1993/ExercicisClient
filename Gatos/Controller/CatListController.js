import {BreedService} from "../Service/BreedService.js";

export class CatListController{
    #breedService;

    constructor() {

        this.#breedService = new BreedService();
    }

    findAllBeeds(){
        return this.#breedService.findAll();
    }
}