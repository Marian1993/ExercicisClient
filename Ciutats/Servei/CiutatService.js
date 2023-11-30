import {Ciutat} from "../Model/Ciutat.js";
import {Pais} from "../Model/Pais.js";

export class CiutatService{

    async findAll() {
        const peticio = await fetch(`https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json`)
        const ciutatsResposta = await peticio.json();
        const ciutatsEntries = Object.entries(ciutatsResposta);

        const resultat = [];
        /*
                for (const ciutatsEntry of ciutatsEntries) {
                    const pais = new Pais(ciutatsEntry[0]);
                    const ciutatsArray = ciutatsEntry[1];
                    for (const ciutats of ciutatsArray) {
                        const ciutat = new Ciutat(ciutats,pais);
                        resultat.push(ciutat);
                    }
                }

         */


        for (let i = 0; i < ciutatsEntries.length; i++) {

            if (ciutatsEntries[i][0] && ciutatsEntries[i][1]) {

                const pais = new Pais(ciutatsEntries[i][0]);

                for (let j = 0; j < ciutatsEntries[i][1].length; j++) {

                    const value = ciutatsEntries[i][1][j];

                    resultat.push(new Ciutat(value, pais));
                }
            }

        }
        return resultat;
    }
}
