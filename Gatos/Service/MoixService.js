import {Moix} from "../Model/Moix.js";
import {BreedService} from "./BreedService.js";

export class MoixService {

    #API_KEY = "live_7zx4rDlSh43TrNAd4vhl5XocdSY5UEKIWuPscIBUpDDAlD7DwNR3TARR2oQe6CP6";
    async findAll() {

        const header = new Headers();
        header.append("Content-Type","application/json");
        header.append("x-api-key",this.#API_KEY);

        const peticio = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=true&order=DESC&page=0&limit=100`,{

            method: 'GET',
            headers: header
        })

        const moixos = await peticio.json();

        return moixos.map(moix => MoixService.jsonToMoix(moix));
    }

    static jsonToMoix(json){

        const jsonBreeds = json.breeds;
        const breeds = jsonBreeds.map(json => BreedService.jsonToBreed(json))

        const moix=  new Moix(json.id,json.url);
        moix.setRaces(breeds);

        return moix;
    }
}