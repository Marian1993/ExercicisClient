
(function getAnimals() {
    fetch('https://theteacher.codiblau.com/public/vetplus/getAnimals')
        .then(function (resposta){
            return resposta.json();
        }).then(function (animals){
            const taula = document.querySelector("#llista");


        for (let i = 0; i < animals.length; i++) {

            let filaAnimal = '<tr>';
            filaAnimal += `<td>${animals[i].nom}</td>`;
            filaAnimal += '<td><a href="animalForm.html">Editar</a></td>';
            filaAnimal += '</tr>';
            taula.innerHTML += filaAnimal;
        }

    })
})();
function getAnimal() {
    
}
function save() {

}