
export class VotService{

    #API_KEY = "live_7zx4rDlSh43TrNAd4vhl5XocdSY5UEKIWuPscIBUpDDAlD7DwNR3TARR2oQe6CP6";
    async #findAllByPage(page) {

        const header = new Headers();
        header.append("Content-Type","application/json");
        header.append("x-api-key",this.#API_KEY);

        const votsFetch = await fetch(`https://api.thecatapi.com/v1/votes?order=ASC&limit=10&page=${page}`,{

            method: 'GET',
            headers: header
        })

        const vots = await votsFetch.json();

        return vots;
    }

    async findAll(){

        let page = 0;
        let result = [];
        let hasVots = true;
        while (hasVots){
            const vots = await this.#findAllByPage(page);
            if(!vots || vots.length === 0){
                hasVots = false;
            }else {
                result = [...vots,...result];
            }
            page++;
        }
        return result;
    }
    async votar(moix,vot){
        const header = new Headers();
        header.append("Content-Type","application/json");
        header.append("x-api-key",this.#API_KEY);

        const votsFetch = await fetch(`https://api.thecatapi.com/v1/votes`,{

            method: 'POST',
            headers: header,
            body: JSON.stringify({
                "image_id":moix.getId(),
                "value":vot
            })
        })
    }

    async delete(moix){
        const header = new Headers();
        header.append("Content-Type","application/json");
        header.append("x-api-key",this.#API_KEY);

        const votsFetch = await fetch(`https://api.thecatapi.com/v1/vote/${moix.getId()}`,{

            method: 'DELETE',
            headers: header,

        })
    }
}