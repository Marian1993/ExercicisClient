
import {Animal} from "../model/animal.js";
//export const urlJson = "https://theteacher.codiblau.com/public/vetplus/";

function prova(){
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
    const peticio = await fetch('https://theteacher.codiblau.com/public/vetplus/getAnimals')

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

function getAnimal() {

    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");

    fetch(urlJson + 'getAnimals')
        .then(function (resposta){
            return resposta.json();
        }).then(function (animals) {
            const animal = animals.find(({idanimal}) => idanimal == id);

            console.log(animal);

            document.querySelector("#nom").value = animal.nom;
            if(animal.sexe.toLowerCase() === 'fem'){
                document.querySelector("#masc").checked = true;
            }else {
                document.querySelector("#fem").checked = true;
            }
            if(animal.tipus.toLowerCase() === 'ca'){
                document.querySelector("#federat").style.display = "none";
                document.querySelector("#nRegistre").value = animal.numregistre;
            }else if(animal.tipus.toLowerCase() === 'cavall'){
                document.querySelector("#registre").style.display = "none";
                document.querySelector("#nFederat").value = animal.numregistre;
            }else if(animal.tipus.toLowerCase() === 'moix'){
                document.querySelector("#registre").style.display = "none";
                document.querySelector("#federat").style.display = "none";
            }
            if(animal.tipus.toLowerCase() === 'ca'){
                document.querySelector("#tipus")[1].setAttribute('selected','selected');
            }else if(animal.tipus.toLowerCase() === 'cavall'){
                document.querySelector("#tipus")[2].setAttribute('selected','selected');

            }else if(animal.tipus.toLowerCase() === 'moix'){
                document.querySelector("#tipus")[0].setAttribute('selected','selected');

            }

        })

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