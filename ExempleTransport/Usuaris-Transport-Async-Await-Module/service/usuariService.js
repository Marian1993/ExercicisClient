import {Usuari} from "../model/usuari.js";
import {getTransportById} from "./transportService.js"

export async function findAllUsers(){
    const getUserFetch = fetch(`https://theteacher.codiblau.com/public/exercicis/other/usuaris/list`)
        .then(function (resposta){
            return resposta.json();
        })
    const usersResolt = await getUserFetch;

    return usersResolt.map(async function (jsonUser){
        return await jsonToUser(jsonUser);
    });
}
async function jsonToUser(json) {
    const transport = await getTransportById(json.transport_idtransport);
    return new Usuari(json.nom,json.cognom2,json.cognom2,transport);
}