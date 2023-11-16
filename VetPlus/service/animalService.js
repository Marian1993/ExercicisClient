
import {Animal} from "../model/animal.js";
export const urlJson = "https://theteacher.codiblau.com/public/vetplus/";


export async function getAnimals() {
    const peticio = await fetch(urlJson + 'getAnimals')

        const animal = await peticio.json();

        const animals = await Promise.all( animal.map(async function(jsonanimal){
            return jsonToAnimal(jsonanimal);
        }));
        console.log(animals);
        return animals;
}
function jsonToAnimal(json){
    return new Animal(json.idanimal, json.nom, json.sexe, json.numregistre, json.tipus);
}

export async function getAnimal(id) {

    const peticio = await fetch(urlJson + 'getAnimals')

            const animals = await peticio.json();
            const animal = animals.find(({idanimal}) => idanimal == id);

            return animal;
}

 export async function save(nom,sexe,numregistre,tipus) {

    console.log(nom);
    console.log(sexe);
    console.log(numregistre);
    console.log(tipus);
    /*const saveFetch = await fetch(this.urlJson + 'save',{
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            animal:{
                idanimal:null,
                nom: nom,
                sexe: sexe,
                numregistre: numregistre,
                tipus: tipus
            }
        })
    })

    const saved = await saveFetch.json();
    console.log(saved);

     */
}