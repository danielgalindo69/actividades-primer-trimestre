let division = prompt("Escriba en qué tipo de división juega");
let divisiones = ["primera", "segunda", "tercera", "cuarta"];

if (division == "primera") {
    console.log("Usted es jugador profesional y gana 2.000.000.000");
} else if (division == "segunda") {
    console.log(`Usted es jugador de ${division} división y gana 10.000.000`);
} else if (division == "tercera") {
    console.log(`Usted es jugador de ${division} división y su salario es de 2.000.000`);
} else if (division == "cuarta") {
    console.log(`Usted es jugador de ${division} división y su salario es de 950.000`);
} else {
    console.log("Usted no es jugador profesional");
}


