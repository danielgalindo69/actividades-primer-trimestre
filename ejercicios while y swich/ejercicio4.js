
let preciosModelos = {
    "escoba_dura_sintetica": 8000,
    "escoba_dura_natural": 10000,
    "escoba_suave_sintetica": 7000,
    "escoba_suave_natural": 9000,
    "cepillo_sintetico": 12000,
    "cepillo_natural": 15000
};


let precioMangoLargo = 2000;
let precioGancho = 500;

let modelo = prompt("Seleccione el modelo de escoba: 1. Escoba dura, 2. Escoba suave, 3. Cepillo");
let material = prompt("Seleccione el tipo de material: 1. Cerdas sintéticas, 2. Cerdas naturales");
let opcionMangoLargo = prompt("¿Desea agregar mango largo? (Costo adicional: $2000) (si/no)");
let opcionGancho = prompt("¿Desea agregar gancho en la punta? (Costo adicional: $500) (si/no)");
let cantidad = Number(prompt("Ingrese la cantidad de escobas a cotizar (mínimo 3, máximo 30)"));

if (cantidad < 3 || cantidad > 30) {
    console.log("Cantidad inválida. La cantidad mínima de fabricación es 3 y la máxima es 30.");
} else if (opcionMangoLargo === "si" && opcionGancho === "si") {
    console.log("No se pueden combinar mango largo y gancho en punta.");
} else {
    let tipoEscoba;
    switch (modelo) {
        case "1":
            tipoEscoba = material === "1" ? "escoba_dura_sintetica" : "escoba_dura_natural";
            break;
        case "2":
            tipoEscoba = material === "1" ? "escoba_suave_sintetica" : "escoba_suave_natural";
            break;
        case "3":
            tipoEscoba = material === "1" ? "cepillo_sintetico" : "cepillo_natural";
            break;
        default:
            console.log("Selección inválida de modelo.");
            tipoEscoba = null;
    }

    if (tipoEscoba) {
        let precioBase = preciosModelos[tipoEscoba];
        let precioTotal = precioBase * cantidad;

        if (opcionMangoLargo === "si") {
            precioTotal += precioMangoLargo * cantidad;
        }

        if (opcionGancho === "si") {
            precioTotal += precioGancho * cantidad;
        }

        console.log(`El precio total de su cotización es: $${precioTotal}`);
    } else {
        console.log("Selección inválida de material.");
    }
}

