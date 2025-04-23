let estadolavadora = true;
let numerodeprendas = Number(prompt("Ingrese el número de prendas:"));
let lavadoBasico = 2000;
let lavadoPremium = 4000;

while (estadolavadora) {
    alert("Bienvenido a la lavandería, ¿qué tipo de lavado desea?");

    console.log("Menú: 1. Lavado Básico 2. Lavado Premium");
    switch (parseInt(prompt("Ingrese una opción:"))) {
        case 1:
            if (numerodeprendas <= 0 && numerodeprendas > 20) {
                console.log("Ingrese un número de prendas en el rango de 1 a 20");
            } else {
                let costoTotal = numerodeprendas * lavadoBasico;
                console.log(`Usted eligió el servicio básico, y su número de prendas fue ${numerodeprendas}, y su costo total a pagar fue de ${costoTotal}`);
            }
            break;

        case 2:
            if (numerodeprendas <= 0 && numerodeprendas > 20) {
                console.log("Ingrese un número de prendas en el rango de 1 a 20");
            } else {
                let costoTotal = numerodeprendas * lavadoPremium;
                console.log(`Usted eligió el servicio premium, y su número de prendas fue ${numerodeprendas}, y su costo total a pagar fue de ${costoTotal}`);
                console.log("Por usar el servicio premium, usted obtuvo secado y planchado gratis");
            }
            break;

        default:
            console.log("Opción no válida");
            break;
    }

    break;
}
