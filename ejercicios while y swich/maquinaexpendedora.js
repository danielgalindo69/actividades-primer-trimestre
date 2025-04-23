let estadoDelamaquina = true;
let comestibles = { "papas": 2000, "dulces": 200, "pepsi": 1500, "cocacola": 2000, "galletas": 1000 };
let saldo = parseFloat(prompt("Ingrese su saldo inicial:"));

while (estadoDelamaquina) {
    console.log("Bienvenido a la máquina de comida");

    console.log("Menu: 1. papas 2. dulces 3. pepsi 4. cocacola 5. galletas. 6. salir");
    
    switch (parseInt(prompt("Elija una opción:")))
     {
        case 1:
            if (saldo >= comestibles["papas"]) {
                saldo -= comestibles["papas"];
                console.log(`Usted ha elegido papas, y su saldo es: ${saldo}`);
            } else {
                console.log("No tienes suficiente saldo para comprar papas");
            }
            break;
        case 2:
             if ( saldo >= comestibles["dulces"]) {
                 saldo -= comestibles["dulces"];
                 console.log(`usted ha elegido dulces y su saldo es;  ${saldo}`);
             }
             else {
                console.log("usted no tiene suficiente saldo ára comprar dulces");
             }

        case 3:
            if (saldo >= comestibles[ "pepsi"]) {
                saldo -= comestibles["pepsi"]
                console.log(`usted ha comprado pepsi y su salario es: ${salario}`);
            }

            else {
                console.log("usted no tiene suficiente dureno ");
            }

        case 4:
            if(saldo>= comestibles["cocacola"]) {
                saldo -= comestibles["cocacola"]
                console.log(`usted ha comprado cocacola y su salario es : ${salario}`);
            }

            else{
                console.log("usted no tiene suficiente saldo")
            }

        case 5:
            if(saldo>= comestibles["galletas"]) {
                saldo -= comestibles["galletas"]
                console.log(`usted ha comprado galletas y su salario es : ${salario}`);
            }

            else{
                console.log("usted no tiene suficiente saldo")
            }
            
        case 6:
            estadoDelamaquina = false;
            console.log("Gracias por usar la máquina de comida.");
            break;
        default:
            console.log("Opción no válida.");
            break;
    }
}
