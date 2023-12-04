import {BreedService} from "../Service/BreedService.js";
import {MoixService} from "../Service/MoixService.js";

export class CatListController{
    #breedService;
    #moixService

    constructor() {

        this.#breedService = new BreedService();
        this.#moixService = new MoixService();
    }

    findAllBeeds(){
        return this.#breedService.findAll();
    }
    findAllMoixos(){

        return this.#moixService.findAll();
    }
}