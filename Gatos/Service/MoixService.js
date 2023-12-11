import {Moix} from "../Model/Moix.js";
import {BreedService} from "./BreedService.js";
import {VotService} from "./VotService.js";

export class MoixService {

    #API_KEY = "live_7zx4rDlSh43TrNAd4vhl5XocdSY5UEKIWuPscIBUpDDAlD7DwNR3TARR2oQe6CP6";
    #votService;

    constructor() {
        this.#votService = new VotService();
    }
    async findAll() {

        const header = new Headers();
        header.append("Content-Type","application/json");
        header.append("x-api-key",this.#API_KEY);

        const peticio = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=true&order=DESC&page=0&limit=100`,{

            method: 'GET',
            headers: header
        })

        const moixos = await peticio.json();
        const vots = await this.#votService.findAll();

        return moixos.map(m => {
            const moix = MoixService.jsonToMoix(m);
            const votsMoix = vots
                .filter(idC =>idC.image_id === moix.getId())
                .reduce((prev,current)=> prev + current.value,0);

            moix.setVots(votsMoix);
            return moix;
        });
    }

    static jsonToMoix(json){

        const jsonBreeds = json.breeds;
        const breeds = jsonBreeds.map(json => BreedService.jsonToBreed(json))

        const moix=  new Moix(json.id,json.url);
        moix.setRaces(breeds);

        return moix;
    }
}