
(function getAnimals() {
    fetch('https://theteacher.codiblau.com/public/vetplus/getAnimals')
        .then(function (resposta){
            return resposta.json();
        }).then(function (animals){
            const taula = document.querySelector("#llista");

        for (let i = 0; i < animals.length; i++) {

           console.log(animals[i]);
        }

    })
})();
function getAnimal() {
    
}
function save() {

}