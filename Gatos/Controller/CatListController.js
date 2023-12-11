import {BreedService} from "../Service/BreedService.js";
import {MoixService} from "../Service/MoixService.js";
import {VotService} from "../Service/VotService.js";

export class CatListController{
    #breedService;
    #moixService;
    #votsService;

    constructor() {

        this.#breedService = new BreedService();
        this.#moixService = new MoixService();
        this.#votsService = new VotService();
    }

    findAllBeeds(){

        return this.#breedService.findAll();
    }
    findAllMoixos(){

        this.#votsService.findAll();
        return this.#moixService.findAll();
    }

    findAllVots(){
        return this.#votsService.findAll();
    }

    upVote(moix){
        this.#votsService.votar(moix,1);
    }
    downVote(moix){
        this.#votsService.votar(moix,-1);
    }

}