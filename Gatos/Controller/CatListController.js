import {BreedService} from "../Service/BreedService.js";
import {MoixService} from "../Service/MoixService.js";
import {VotService} from "../Service/VotService.js";
import {FavoriteService} from "../Service/FavoriteService.js";

export class CatListController{
    #breedService;
    #moixService;
    #votsService;
    #favoriteService;

    constructor() {

        this.#breedService = new BreedService();
        this.#moixService = new MoixService();
        this.#votsService = new VotService();
        this.#favoriteService =  new FavoriteService();
    }

    findAllBeeds(){

        return this.#breedService.findAll();
    }
    findAllMoixos(){

        this.#votsService.findAll();
        return this.#moixService.findAll();
    }

    findAllFavorites(){
        return this.#favoriteService.findAll();
    }
    addFavorite(moix){
        this.#favoriteService.add(moix);
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