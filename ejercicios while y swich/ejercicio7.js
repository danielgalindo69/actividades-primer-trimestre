let localidades = {"vip": 300000, "preferencial":150000, "general":50000}
let cantidad_de_boletas = Number(prompt("ingrese la cantidad de boletas que desea comprar:"));
let impuesto = 0.10;
let cargo_por_servicio = 5000;
let costo_total;

console.log("menu de boletas: 1.vip, 2.preferencial, 3.general");
let eleccion = parseInt(prompt("elija el tipo de boleta que desea comprar:"));

switch(eleccion){
    case 1:
        if (cantidad_de_boletas >5){
            alert("no puede comprar mas de 5 boletas")
            break;
        }

        else {
            costo_total = cantidad_de_boletas * localidades["vip"] *(1 + impuesto) + cargo_por_servicio;
            console.log(`el costo total de su compra es: ${costo_total}`)
        }break;

        case 2:
            if (cantidad_de_boletas >5){
                alert("no puede comprar mas de 5 boletas")
                break;
            }
    
            else {
                costo_total = cantidad_de_boletas * localidades["preferencial"] *(1 + impuesto) + cargo_por_servicio;
                console.log(`el costo total de su compra es: ${costo_total}`)
            }break;

            case 3:
                if (cantidad_de_boletas >5){
                    alert("no puede comprar mas de 5 boletas")
                    break;
                }
        
                else {
                    costo_total = cantidad_de_boletas * localidades["general"] *(1 + impuesto) + cargo_por_servicio;
                    console.log(`el costo total de su compra es: ${costo_total}`)
                }break;

            default: {
                console.log("seleccion invalida")
            }
            break;
           
    
}