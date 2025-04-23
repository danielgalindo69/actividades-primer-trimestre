let restaurantes = ["hamburgueseria", "pizzeria", "comida china"];
let estadoRestaurante = true;
let tarifaDomicilio = 5000;
let dineroDisponible = Number(prompt("Ingrese el dinero disponible:"));
let cantidad = Number(prompt("Ingrese la cantidad de comida que desea pedir:"));
let menu = {
    1: 25000,// Hamburguesa
    2: 85000,// Pizza Familiar
    3: 18000 // Fideos con Pollo
};

while (estadoRestaurante) {
    alert("Bienvenido, por favor elija en qué restaurante desea comer:");
    console.log("Restaurantes: 1. Hamburguesería, 2. Pizzería, 3. Comida China");

    let restauranteSeleccionado = parseInt(prompt("Ingrese el número del restaurante en el que desea ordenar de la opcion 1 a la 3:"));
    if (restauranteSeleccionado < 1 && restauranteSeleccionado > 3) {
        console.log("Opción inválida, inténtelo de nuevo.");
       
    }

    alert(`Usted ha seleccionado la ${restaurantes[restauranteSeleccionado ]}`);
    console.log("Usted puede elegir estas opciones de comida:");
    console.log("1. Hamburguesa = 25000, 2. Pizza Familiar = 85000, 3. Fideos con Pollo = 18000");

    let comidaSeleccionada = parseInt(prompt("Ingrese el número de la opción de comida que desea :"));
    if (comidaSeleccionada < 1 && comidaSeleccionada > 3) {
        console.log("Opción de comida inválida, inténtelo de nuevo.");
        
    }

    let costoComida = menu[comidaSeleccionada];
    let costoTotal = cantidad * costoComida + tarifaDomicilio;

    if (costoTotal < 23000) {
        console.log("El monto mínimo de compra es de $23000. Su pedido es demasiado pequeño.");
    } else if (costoTotal > dineroDisponible) {
        console.log("No tiene suficiente dinero para ordenar.");
    } else {
        let saldoRestante = dineroDisponible - costoTotal;
        console.log(`Su total a pagar es: ${costoTotal} y su saldo restante es: ${saldoRestante}`);
    }

    console.log(`El tiempo estimado de delivery es de 45 minutos a 1 hora. El pago puede ser en efectivo o con tarjeta débito/crédito.`);


}
