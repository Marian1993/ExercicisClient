
import {Animal} from "../model/animal.js";
export const urlJson = "https://theteacher.codiblau.com/public/vetplus/";

export function elegirAnimal(){
    document.querySelector("#tipus").addEventListener('change',(ev) =>{
        if(ev.target.value === 'ca'){
            document.querySelector("#federat").style.display = "none";
            document.querySelector("#registre").style.display = "block";
        }else if(ev.target.value === 'cavall'){
            document.querySelector("#registre").style.display = "none";
            document.querySelector("#federat").style.display = "block";
        }else if(ev.target.value === 'moix'){
            document.querySelector("#registre").style.display = "none";
            document.querySelector("#federat").style.display = "none";
        }
    })
}

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

export async function getAnimal() {

    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");

    const peticio = await fetch(urlJson + 'getAnimals')

            const animals = await peticio.json();
console.log(animals);
            const animal = animals.find(({idanimal}) => idanimal == id);
            console.log(id);
            console.log(animal);

            return animal;





}

async function save(nom,sexe,numregistre,tipus) {
    const saveFetch = await fetch(this.urlJson + 'save',{
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
}