export class Moix {

    #id
    #url;
    #races;
    #racesObj
    #vots
    #favorits

    constructor(id,url) {
        this.#id = id;
        this.#url = url;
    }
    getUrl(){
        return this.#url;
    }
    setUrl(ulr){
        this.#url = url;
    }
    getId(){
        return this.#id;
    }
    setId(id){
        this.#id = id;
    }
    setRaces(races){
        this.#races = races;
    }
    getRaces(){
        return this.#races;
    }

    setRacesObj(races){
        this.#racesObj = races;
    }
    getRacesObj(){
        return this.#racesObj;
    }
}