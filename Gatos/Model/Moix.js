export class Moix {

    #id
    #url;
    #races;
    #vots
    #idVots;
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
    getVots(){
        return this.#vots;
    }
    setVots(vots){
        this.#vots = vots;
    }
    getidVots(){
        return this.#idVots;
    }
    setidVots(id){
        this.#idVots = id;
    }
    getFavorits(){
        return this.#favorits;
    }
    setFavorits(fav){
        this.#favorits = fav;
    }
}