import {PaisosServei} from "./PaisosServei.js";
export class TempsService{

    async temps(pais){
        const header = new Headers();
        header.append("Content-Type", "application/x-www-form-urlencoded");

        const peticioHores = await fetch("https://theteacher.codiblau.com/public/exercicis/data/worldtime",{

            method: 'POST',
            headers: header,
            body: `codi=${pais}&tipus=HOUR`
        })
        const peticioMinuts = await fetch("https://theteacher.codiblau.com/public/exercicis/data/worldtime",{

            method: 'POST',
            headers: header,
            body: `codi=${pais}&tipus=MINUTE`
        })
        const peticioSegons = await fetch("https://theteacher.codiblau.com/public/exercicis/data/worldtime",{

            method: 'POST',
            headers: header,
            body: `codi=${pais}&tipus=SECOND`
        })

        const hores = await peticioHores.text();
        const minuts = await peticioMinuts.text();
        const segons = await peticioSegons.text();

        return {hores,minuts,segons};
    }
}