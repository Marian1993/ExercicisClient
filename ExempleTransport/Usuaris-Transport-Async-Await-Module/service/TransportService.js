import {Transport} from "../model/Transport.js";

export async function getTransportById(id){
    const peticio = fetch(`https://theteacher.codiblau.com/public/exercicis/other/usuaris/transport`, {
        method: 'POST',
        headers:{
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: 'idtransport=' + id
    }).then(function (r2){
            return r2.json();
    });

    const transport = await peticio;
    return jsonToTransport(transport);
}

function jsonToTransport(json){
    return new Transport(json.id,json.url);
}