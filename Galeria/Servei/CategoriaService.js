import {Categoria} from "../Model/Categoria.js";

export class CategoriaService{
    async findAll(){
        const peticio = await fetch(`https://theteacher.codiblau.com/public/exercicis/galeria/categories`)
        const categoriesResponse = await peticio.json();
        const categoriaEntries = Object.entries(categoriesResponse);

        const categories = [];
        for (let i = 0; i <categoriaEntries.length; i++) {
            const key = categoriaEntries[i][0];
            const value = categoriaEntries[i][1];
            categories.push(new Categoria(value,key));
        }
        return categories;
    }
}
