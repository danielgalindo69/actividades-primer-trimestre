
let fisica = Number(prompt("Ingrese su nota de Física"));
let quimica = Number(prompt("Ingrese su nota de Química"));
let biologia = Number(prompt("Ingrese su nota de Biología"));
let matematicas = Number(prompt("Ingrese su nota de Matemáticas"));
let informatica = Number(prompt("Ingrese su nota de Informática"));

let sumaCalificaciones = fisica + quimica + biologia + matematicas + informatica;

let porcentaje = (sumaCalificaciones / 50) * 100;

let calificacion;
if (porcentaje >= 0 && porcentaje <= 59.9) {
   calificacion = "Mala";
} else if (porcentaje >= 60 && porcentaje <= 80) {
   calificacion = "Buena";
} else if (porcentaje > 80 && porcentaje <= 100) {
   calificacion = "Excelente";
} else {
   calificacion = "Inválida";
}

console.log(`Tu porcentaje es ${porcentaje}% y tu calificación es ${calificacion}.`);
