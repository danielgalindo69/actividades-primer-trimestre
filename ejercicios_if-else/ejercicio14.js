let tamaño = prompt("Ingrese el tamaño del sándwich (pequeño o grande)");

let costoBase;
if (tamaño === "pequeño") {
costoBase = 6000;
} else if (tamaño === "grande") {
costoBase = 12000;
} else {
console.log("Tamaño de sándwich no válido.");
costoBase = 0;
}
let tocineta = confirm("¿Desea agregar tocineta? ($3000)");
let jalapeno = confirm("¿Desea agregar jalapeño? (gratis)");
let pavo = confirm("¿Desea agregar pavo? ($3000)");
let queso = confirm("¿Desea agregar queso? ($2500)");

let costoIngredientes = 0;
if (tocineta) costoIngredientes += 3000;
if (jalapeno) costoIngredientes += 0;
if (pavo) costoIngredientes += 3000;
if (queso) costoIngredientes += 2500;

let costoTotal = costoBase + costoIngredientes;
console.log(`El costo total por su sándwich es: $${costoTotal}`);



