let categorialibro = {"bestsellers":500, "literatura":100,"academicos":0}

let numeroDias = Number(prompt("Ingrese el número de días que va a usar el libro"));
let numerodelibros = Number(prompt("Ingrese el número de libros que va a alquilar:"));
let descuento = 0.10;
let costoTotal;
console.log("Menú categorías: 1. Bestsellers, 2. Literatura, 3. Académicos");
let eleccion = parseInt(prompt("Elija la categoría del libro que desea alquilar:"));

if (numerodelibros > 5 || numerodelibros <= 0 || numeroDias <= 0 || numeroDias > 30) {
    console.log("Por favor, ingrese parámetros válidos.");
} else {
    switch (eleccion) {
        case 1:
            if (numeroDias > 10) {
                costoTotal = categorialibro["bestsellers"] * numerodelibros * numeroDias * (1 - descuento);
            } else {
                costoTotal = categorialibro["bestsellers"] * numerodelibros * numeroDias;
            }
            console.log(`Usted ha alquilado los libros por ${numeroDias} días y la cantidad de libros fue ${numerodelibros}. El costo total fue de $${costoTotal}.`);
            break;

        case 2:
            if (numeroDias > 10) {
                costoTotal = categorialibro["literatura"] * numerodelibros * numeroDias * (1 - descuento);
            } else {
                costoTotal = categorialibro["literatura"] * numerodelibros * numeroDias;
            }
            console.log(`Usted ha alquilado los libros por ${numeroDias} días y la cantidad de libros fue ${numerodelibros}. El costo total fue de $${costoTotal}.`);
            break;

        case 3:
            costoTotal = categorialibro["academicos"];
            console.log(`Usted ha alquilado los libros por ${numeroDias} días y la cantidad de libros fue ${numerodelibros}. El costo total fue de $${costoTotal}.`);
            break;

        default:
            console.log("Opción no válida");
            break;
    }
}



