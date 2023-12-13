
export class FavoriteService{

    #API_KEY = "live_7zx4rDlSh43TrNAd4vhl5XocdSY5UEKIWuPscIBUpDDAlD7DwNR3TARR2oQe6CP6";
    async #findAllFavorites(page) {

        const header = new Headers();
        header.append("Content-Type","application/json");
        header.append("x-api-key",this.#API_KEY);

        const votsFetch = await fetch(`https://api.thecatapi.com/v1/favourites?order=ASC&limit=10&page=${page}`,{

            method: 'GET',
            headers: header
        })

        const favorite = await votsFetch.json();

        return favorite;
    }

    async findAll(){

        let page = 0;
        let result = [];
        let hasFavorite = true;
        while (hasFavorite){
            const favorites = await this.#findAllFavorites(page);
            if(!favorites || favorites.length === 0){
                hasFavorite = false;
            }else {
                result = [...favorites,...result];
            }
            page++
        }
        return result;
    }

    async add(moix){
        const header = new Headers();
        header.append("Content-Type","application/json");
        header.append("x-api-key",this.#API_KEY);

        const votsFetch = await fetch(`https://api.thecatapi.com/v1/votes`,{

            method: 'POST',
            headers: header,
            body: JSON.stringify({
                "image_id":moix.getId(),
            })
        })
    }
}