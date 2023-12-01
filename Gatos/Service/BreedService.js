import {Breed} from "../Model/Breed.js";

export class BreedService {
    async findAll() {

        const header = new Headers();
        header.append("Content-Type","application/json");

        const peticio = await fetch(`https://api.thecatapi.com/v1/breeds`,{

            method: 'GET',
            headers: header
        })

        const breedsRequest = await peticio.json();

        return breedsRequest.map(json => this.#jsonToBreed(json))
    }

    #jsonToBreed(json){

        return new Breed(json.id,json.name);
    }
}