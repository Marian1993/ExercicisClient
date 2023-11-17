export async function findAllCategories(){
    const peticio = await fetch(`https://theteacher.codiblau.com/public/exercicis/galeria/categories`)

    const categoriaResolt = await peticio.json();

    console.log(typeof categoriaResolt);
    console.log(categoriaResolt.length);

    for (let i = 0; i < categoriaResolt.length; i++) {
        console.log(categoriaResolt[i]);

    }
}