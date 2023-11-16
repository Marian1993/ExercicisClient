import {findAllUsers} from "../service/UsuariService.js";
import {getTransportById} from "../service/TransportService.js";

export async function findAllusuarisTransport() {

    const usuaris = await findAllUsers();
    const transportsPromise = [];

    for (let i = 0; i < usuaris.length; i++) {

        const transport = getTransportById(usuaris[i].transport);
        transportsPromise.push(transport);

    }
    const tranports = await Promise.all(transportsPromise);

    for (let i = 0; i < usuaris.length; i++) {

        usuaris[i].transportObj = tranports[i];
    }
    return usuaris;
}