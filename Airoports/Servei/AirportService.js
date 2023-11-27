
export class AirportsService{
    async findAll(){
        const peticio = await fetch(`https://theteacher.codiblau.com/public/exercicis/airports`)
        const airportsResponse = await peticio.json();


        return airportsResponse;
    }
}