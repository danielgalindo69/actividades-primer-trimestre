function retirar(monto) {
    if (monto > 500) {
        console.log("No puedes retirar más de $500 en una sola transacción.");
    } else if (monto > saldo) {
        console.log("Saldo insuficiente para realizar el retiro.");
    } else if (monto > 0) {
        saldo -= monto;
        registrarTransaccion(-monto);
        console.log(`Has retirado $${monto}. Tu nuevo saldo es: $${saldo}`);
    } else {
        console.log("El monto a retirar debe ser positivo.");
    }
}
 
function registrarTransaccion(monto) {
    if (transacciones.length === 5) {
        transacciones.shift(); 
    }
    transacciones.push(monto);
}

function mostrarTransacciones() {
    console.log("Últimas 5 transacciones:");
    transacciones.forEach(transaccion => {
        const tipo = transaccion > 0 ? "Depósito" : "Retiro";
        console.log(`${tipo}: $${Math.abs(transaccion)}`);
    });
}

function menu() {
    let salir = false;
    while (!salir) {
        console.log("\n--- Cajero Automático ---");
        console.log("1. Consultar saldo");
        console.log("2. Depositar dinero");
        console.log("3. Retirar dinero");
        console.log("4. Ver últimas 5 transacciones");
        console.log("5. Salir");

        const opcion = prompt("Elige una opción: ");
        switch (opcion) {
            case "1":
                consultarSaldo();
                break;
            case "2":
                const montoDeposito = parseFloat(prompt("Ingresa el monto a depositar: "));
                depositar(montoDeposito);
                break;
            case "3":
                const montoRetiro = parseFloat(prompt("Ingresa el monto a retirar: "));
                retirar(montoRetiro);
                break;
            case "4":
                mostrarTransacciones();
                break;
            case "5":
                console.log("Gracias por usar el cajero automático. ¡Hasta luego!");
                salir = true;
                break;
            default:
                console.log("Opción no válida. Intenta de nuevo.");
        }
    }
}



menu();