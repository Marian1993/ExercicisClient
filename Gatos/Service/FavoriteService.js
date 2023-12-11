
export class FavoriteService{

    #API_KEY = "live_7zx4rDlSh43TrNAd4vhl5XocdSY5UEKIWuPscIBUpDDAlD7DwNR3TARR2oQe6CP6";
    async #findAllByPage(page) {

        const header = new Headers();
        header.append("Content-Type","application/json");
        header.append("x-api-key",this.#API_KEY);

        const votsFetch = await fetch(`https://api.thecatapi.com/v1/favourites`,{

            method: 'GET',
            headers: header
        })

        const vots = await votsFetch.json();

        return vots;
    }
}