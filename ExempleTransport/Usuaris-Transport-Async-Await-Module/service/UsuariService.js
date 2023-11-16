import {Usuari} from "../model/Usuari.js";


export async function findAllUsers(){
    const getUserFetch = fetch(`https://theteacher.codiblau.com/public/exercicis/other/usuaris/list`)
        .then(function (resposta){
            return resposta.json();
        })
    const usersResolt = await getUserFetch;

    return usersResolt.map(function (jsonUser){
        return jsonToUser(jsonUser);
    });
}
function jsonToUser(json) {
    return new Usuari(json.nom,json.cognom2,json.cognom2,json.transport_idtransport);
}