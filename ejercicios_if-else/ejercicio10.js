let numCopias = Number(prompt("Ingrese el número de copias que desea imprimir"));

let precioPorCopia;
if (numCopias >= 0 && numCopias <= 499) {
precioPorCopia = 120;
} else if (numCopias >= 500 && numCopias <= 749) {
precioPorCopia = 100;
} else if (numCopias >= 750 && numCopias <= 999) {
precioPorCopia = 80;
} else if (numCopias >= 1000) {
precioPorCopia = 50;
} else {
precioPorCopia = 0;
console.log("Número de copias no válido.");
}

let precioTotal = numCopias * precioPorCopia;

if (precioPorCopia > 0) {
console.log(`El precio por copia es: ${precioPorCopia}`);
console.log(`El precio total por ${numCopias} copias es: ${precioTotal}`);
}
