let valorBaseMatricula = 7000000;
let interesMensual = 0.02;
let descuentoPagoCompleto = 0.05;

let opcionPago;
let salir = false;

while (!salir) {
    opcionPago = parseInt(prompt("Seleccione una opción de pago:\n1. Pago completo (5% de descuento)\n2. Pago en 2 cuotas\n3. Pago en 3 cuotas\n4. Salir"));

    switch (opcionPago) {
        case 1:
            let valorFinal = valorBaseMatricula * (1 - descuentoPagoCompleto);
            console.log(`Usted eligió el pago completo. El valor total a pagar es: $${valorFinal}`);
            salir = true;  
            break;
        case 2:
           
            let valorCuota2 = valorBaseMatricula / 2;
            let valorTotal2 = valorCuota2 * (1 + interesMensual) + valorCuota2;
            console.log(`Usted eligió el pago en 2 cuotas. El valor de cada cuota es: $${valorCuota2 * (1 + interesMensual)}. El valor total a pagar es: $${valorTotal2}`);
            salir = true; 
            break;
        case 3:
            let valorCuota3 = valorBaseMatricula / 3;
            let valorTotal3 = valorCuota3 * (1 + interesMensual) + valorCuota3 * (1 + interesMensual) + valorCuota3;
            console.log(`Usted eligió el pago en 3 cuotas. El valor de cada cuota es: $${valorCuota3 * (1 + interesMensual)}. El valor total a pagar es: $${valorTotal3}`);
            salir = true;  
            break;
        case 4:
            console.log("Gracias por utilizar el sistema de pago de matrículas. ¡Hasta luego!");
            salir = true; 
            break;
        default:
            console.log("Opción no válida. Por favor, seleccione una opción correcta.");
            break;
    }
}
