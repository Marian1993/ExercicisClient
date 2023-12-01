import {Image} from "../Model/Image.js";

export class ImageBreedsService {
    async findAll() {

        const header = new Headers();
        header.append("Content-Type","application/json");
        header.append("x-api-key","live_7zx4rDlSh43TrNAd4vhl5XocdSY5UEKIWuPscIBUpDDAlD7DwNR3TARR2oQe6CP6")

        const peticio = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=true&order=DESC&page=0&limit=100`,{

            method: 'GET',
            headers: header
        })

        const imageRequest = await peticio.json();

        return imageRequest.map(json => this.#jsonToImage(json));
    }

    #jsonToImage(json){

        return new Image(json.url,json.name);
    }
}