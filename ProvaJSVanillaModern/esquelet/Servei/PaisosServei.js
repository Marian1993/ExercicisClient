export class PaisosServei {

    async paisos(){
        const peticio = await fetch("https://theteacher.codiblau.com/public/exercicis/data/paisos");
        const paisosObj = await peticio.json();
        const paisos = []

        Object.keys(paisosObj).forEach((key) => paisos.push(key));

        return paisos;

    }
}