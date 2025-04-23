
let dias = Number(prompt("Ingrese el número de días de la mensualidad"));

let costo;
if (dias === 15) {
 costo = 18000;
} else if (dias === 30) {
 costo = 35000;
} else if (dias === 90) {
costo = 86000;
} else {
costo = 0;
console.log("El número de días no es válido para una mensualidad.");
}

if (costo !== 0) {
    console.log(`El costo total por una mensualidad de ${dias} días es: $${costo}`);
}
