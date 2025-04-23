
let tipoLavadora = Number(prompt("Ingrese el tipo de lavadora (1 para grande, 2 para pequeña)"));
let cantidad = Number(prompt("Ingrese el número de lavadoras alquiladas"));
let horas = Number(prompt("Ingrese el número de horas de alquiler"));

let costoPorHora;
if (tipoLavadora === 1) {
    costoPorHora = 4000;
} else if (tipoLavadora === 2) {
    costoPorHora = 3000;
} else {
    console.log("Tipo de lavadora no válido.");
    costoPorHora = 0;
}

let costoBase = cantidad * horas * costoPorHora;


let descuento = 0;
if (cantidad > 3) {
    descuento = costoBase * 0.03;
}

let costoTotal = costoBase - descuento;

console.log(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: $${costoTotal}`);
