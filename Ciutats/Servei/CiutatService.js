import {Ciutat} from "../Model/Ciutat.js";

export class CiutatService{

    async findAll(){
        const peticio = await fetch(`https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json`)
        const ciutatsResposta = await peticio.json();
        const ciutatsEntries = Object.entries(ciutatsResposta);

        const ciutat = [];

        for (let i = 0; i < ciutatsEntries.length; i++) {

            const key = ciutatsEntries[i][0];

            for (let j = 0; j < ciutatsEntries[i][1].length; j++) {

                const value = ciutatsEntries[i][1][j];

                ciutat.push(new Ciutat(value,key));
            }
        }
        return ciutat;
    }
}
