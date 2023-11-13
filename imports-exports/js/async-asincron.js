
export async function bucle(numero) {
    // no esta be, hi ha await dins bucles

   /* for (let i = 1; i <= numero; i++) {
        // si se llev s'await se hauria de posar un .then
        const promesa = await fetch("https://theteacher.codiblau.com/public/exercicis/other/asincron-get?num=" + i);
        const promesaResolta = await promesa.text();
        document.querySelector("#app").innerHTML += `<p>${promesaResolta}</p>`;
    }*/


    const promeses = [];
    for (let i = 1; i < numero; i++) {
        // primer feim un fetch per a cada numero, que retorna una promesa
        const promesa = fetch("https://theteacher.codiblau.com/public/exercicis/other/asincron-get?num=" + i)
            // despres resolem sa promesa amb un then, que passa cada resposta a text
            .then( function (resposta) {
                return resposta.text();
            })
        // i quan sa promesa des fetch se resol (que primer se ha de resoldre es .text) se fa un push de sa promesa a s'array
        promeses.push(promesa);
    }
    // aixo espera a nes promise.all de adalt, per tant domes se executa quan totes ses promeses se han resolt
    return await Promise.all(promeses);
}