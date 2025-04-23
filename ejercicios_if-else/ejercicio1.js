
let nombre = prompt("Ingrese el nombre del empleado");
let horas = Number(prompt("Ingrese el número de horas trabajadas"));


let tarifa_por_hora;
if (horas >= 1 && horas <= 10) {
    tarifa_por_hora = 30000;
} else if (horas > 10) {
    tarifa_por_hora = 33000;
}

let salario = horas * tarifa_por_hora;


console.log(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a $${salario}`);
