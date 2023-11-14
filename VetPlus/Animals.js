
const url = "https://theteacher.codiblau.com/public/vetplus/";

//onclick="getAnimal(function (){return ${animals[i]}})"

if(this.window.location.pathname === "/ExercicisClient/VetPlus/animals.html"){
    getAnimals();
}
if(this.window.location.pathname === "/ExercicisClient/VetPlus/animalForm.html"){
    getAnimal();
}
function getAnimals() {
    fetch(url + 'getAnimals')
        .then(function (resposta){
            return resposta.json();
        }).then(function (animals){
            const taula = document.querySelector("#llista");

            for (let i = 0; i < animals.length; i++) {

                let idHref = "animalForm.html?id=" + animals[i].idanimal;// + "&nom=" + animals[i].nom + "&sexe=" + animals[i].sexe + "&numRe=" + animals[i].numregistre + "&tipus=" + animals[i].tipus ;
                let filaAnimal = '<tr>';
                filaAnimal += `<td>${animals[i].nom}</td>`;
                filaAnimal += `<td><a href=${idHref} >Editar</a></td>`;
                filaAnimal += '</tr>';
                taula.innerHTML += filaAnimal;
            }

        })
}

function getAnimal() {

    let animal = {};
    const form  = document.querySelector('#formulari');
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");
    fetch(url + 'getAnimals')
        .then(function (resposta){
            return resposta.json();
        }).then(function (animals) {

            animal={
                id:animals[id].id,
                nom:animals[id].nom,
                sexe:animals[id].sexe,
                numregistre:animals[id].numregistre,
                tipus:animals[id].tipus
            }
        })

}

function save() {

}