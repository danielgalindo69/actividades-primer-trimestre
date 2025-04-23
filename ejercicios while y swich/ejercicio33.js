let modeloTenis = {"clasico":500000, "deportivo":800000, "basketball":1000000.};
let tallaDezapato;
let unidadesdecompra = Number(prompt("ingrese cuantos zapatos desea comprar:"));
let descuento = 0.10;
let preciotolal;
console.log("menu de productos: 1.clasico, 2.deportivo, 3.basketball ");

let eleccion = parseInt(prompt("elij el modelo que desea comprar:"));
switch (eleccion){
    case 1:
        if (tallaDezapato <35 && tallaDezapato >44){
            console.log("lo sentimos, no tenemos este zapato en su talla")
             if (unidadesdecompra <=0 && unidadesdecompra >5)
                console.log("por favor ingrese un numero de unidades valido")
            break;
        }
        else if (unidadesdecompra >=3) {
             preciotolal = (modeloTenis["clasico"]*unidadesdecompra* (1- descuento))
             console.log(`el precio total de su compra es; ${preciotolal} y su descuento es de ${descuento}`)
            break;
            }
        else {
            preciotolal = modeloTenis["clasico"] * unidadesdecompra
            console.log(`el precio total de la compra es :${preciotolal}`)
            break;
        }

    case 2:
        if (tallaDezapato <35 && tallaDezapato >44){
            console.log("lo sentimos, no tenemos este zapato en su talla")
            if (unidadesdecompra <=0 && unidadesdecompra >5)
                console.log("por favor ingrese un numero de unidades valido")
            break;
        }
        else if (unidadesdecompra >=3) {
             preciotolal = (modeloTenis["deportivo"]*unidadesdecompra*(1- descuento))
             console.log(`el precio total de su compra es; ${preciotolal} y su descuento es de ${descuento}`)
            break;
            }
        else {
            preciotolal = modeloTenis["deportivo"] * unidadesdecompra
            console.log(`el precio total de la compra es :${preciotolal}`)
            break;
        }

    case 3:
        if (tallaDezapato <35 && tallaDezapato >44){
            console.log("lo sentimos, no tenemos este zapato en su talla")
            if (unidadesdecompra <=0 && unidadesdecompra >5)
                console.log("por favor ingrese un numero de unidades valido")
            break;
        }
        else if (unidadesdecompra >=3) {
             preciotolal = (modeloTenis["basketball"]*unidadesdecompra*(1- descuento))
             console.log(`el precio total de su compra es; ${preciotolal} y su descuento es de ${descuento}`)
            break;
            }
        else {
            preciotolal = modeloTenis["basketball"] * unidadesdecompra
            console.log(`el precio total de la compra es :${preciotolal}`)
            break;
        }
      

      default:
        console.log("opcion no valida")
        break;  
}  
   console.log("gracias por compar")