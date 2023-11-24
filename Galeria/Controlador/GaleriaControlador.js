import {CategoriaService} from "../Servei/CategoriaService.js";
import {ObraService} from "../Servei/ObraService.js";

export class GaleriaControlador {

    #categoriaService;
    #obraService;

    constructor() {
        this.#categoriaService = new CategoriaService();
        this.#obraService = new ObraService();
    }

    async findAllObres(){
        const categories = await this.findAllCategories();
        /*
        const  categoriesCopia = [...categories];
        console.log(categories,categoriesCopia);
         */

        const obres = await this.#obraService.findAll();
        return obres.map(o =>{
            const categoriaSelected = categories.find(c => c.getNom() === o.getCategoria())
            if(categoriaSelected){
                o.setCategoriaObj(categoriaSelected);
            }
            return o;
        });
    }
    async findAllCategories(){

        return await this.#categoriaService.findAll();
    }

}