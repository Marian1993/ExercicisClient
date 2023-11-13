
const url = "https://theteacher.codiblau.com/public/vetplus/";

if(this.window.location.pathname === "/ExercicisClient/VetPlus/animals.html"){
    getAnimals();
}
function getAnimals() {
    fetch(url + 'getAnimals')
        .then(function (resposta){
            return resposta.json();
        }).then(function (animals){
            const taula = document.querySelector("#llista");

            for (let i = 0; i < animals.length; i++) {

                let idHref = "animalForm.html?id=" + animals[i].idanimal;
                let filaAnimal = '<tr>';
                filaAnimal += `<td>${animals[i].nom}</td>`;
                filaAnimal += `<td><a href=${idHref} onclick="getAnimal(function (){return ${animals[i]}})">Editar</a></td>`;
                filaAnimal += '</tr>';
                taula.innerHTML += filaAnimal;
            }

    })
}
function getAnimal(animal) {
    console.log("Entra");
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");
    console.log(animal);
    console.log(id);
}
function save() {

}