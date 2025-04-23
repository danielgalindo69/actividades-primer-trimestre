let puntajes = [85, 92, 78, 95, 88];

let mapPuntajes = new Map(puntajes.map((puntaje, indice) => [indice, puntaje]));

mapPuntajes.set(mapPuntajes.size, 90);

console.log(mapPuntajes);



