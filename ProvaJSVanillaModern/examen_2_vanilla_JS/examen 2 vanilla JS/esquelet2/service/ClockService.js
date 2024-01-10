import {Pais} from "../model/Pais.js";

export class ClockService {
    async findAllPaisos() {
        const paisosFetch = await fetch("https://theteacher.codiblau.com/public/exercicis/data/paisos");
        const response = await paisosFetch.json();
        const entries = Object.entries(response);


        const paisos = [];
        for (const [key, value] of entries) {
            const pais = new Pais(key,value);
            paisos.push(pais);
        }

        return paisos;
    }

    async findTempsPais(pais) {
        const header = new Headers();
        header.append("Content-Type", "application/x-www-form-urlencoded");

        const hoursFetch = fetch("https://theteacher.codiblau.com/public/exercicis/data/worldtime", {
            method: 'POST',
            headers: header,
            body: 'codi=' + pais + '&tipus=HOUR'
        }).then(r => r.text());

        const minutesFetch = fetch("https://theteacher.codiblau.com/public/exercicis/data/worldtime", {
            method: 'POST',
            headers: header,
            body: 'codi=' + pais + '&tipus=MINUTE'
        }).then(r => r.text());

        const secondsFetch = fetch("https://theteacher.codiblau.com/public/exercicis/data/worldtime", {
            method: 'POST',
            headers: header,
            body: 'codi=' + pais + '&tipus=SECOND'
        }).then(r => r.text());

        return await Promise.all([hoursFetch, minutesFetch, secondsFetch]);
    }
}