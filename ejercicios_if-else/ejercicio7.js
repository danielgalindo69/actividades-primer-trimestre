/*
let edad = Number(prompt("ingrese su edad"))

let ayuda;
if (genero == "femenino" && edad<30){
let ayuda = 0;
console.log("lo sentimos, pero usted no pueede recibir ayuda")
}

else if (genero == "femenino" && edad>=39 && edad<=50){
 let ayuda= 100.000;
console.log("usted podra recibir una ayuda de 100.000")    
}

else if (genero == "femenino"&& edad>=50){
    console.log("usted podra recibir una ayuda de 120.000")
}

else if (genero == "masculino"){
    console.log("usted recibira una ayuda de 40.000")
}

else {
    console.log("digite una edad valida porfavor")
}

console.log (`el valor de su ayuda mensual es: ${ayuda}`)


*/

let genero = prompt("Digite su género (femenino o masculino)");
let edad = Number(prompt("Ingrese su edad"));

let ayuda;
if (genero === "femenino") {
    if (edad > 50) {
        ayuda = 120000;
        console.log("Usted podrá recibir una ayuda de 120,000");
    } else if (edad >= 30 && edad <= 50) {
        ayuda = 100000;
        console.log("Usted podrá recibir una ayuda de 100,000");
    } else {
        ayuda = 0;
        console.log("Lo sentimos, pero usted no puede recibir ayuda");
    }
} else if (genero === "masculino") {
    ayuda = 40000;
    console.log("Usted recibirá una ayuda de 40,000");
} else {
    ayuda = 0;
    console.log("Por favor, digite un género válido.");
}

console.log(`El valor de su ayuda mensual es: $${ayuda}`);
