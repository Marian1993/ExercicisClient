export async function findAllGaleries(){
    const peticio = await fetch(`https://theteacher.codiblau.com/public/exercicis/galeria/list`)

    const galeriaResolt = await peticio.json();
    console.log(typeof galeriaResolt);
    console.log(galeriaResolt.length);

    for (let i = 0; i < galeriaResolt.length; i++) {
        console.log(galeriaResolt[i]);

    }
}