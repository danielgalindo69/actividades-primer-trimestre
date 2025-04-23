let primernumero = Number(prompt("ingrese su numero "))
let segundonumero = Number(prompt("ingrese su numero "))
let tercernumero = Number(prompt("ingrese su numero "))

if (primernumero > segundonumero && primernumero >tercernumero){
    console.log("su primer numero es el mayor")
}

else if (segundonumero> primernumero && segundonumero>tercernumero){
    console.log("su segundo numero es mayor")
}

else if ( tercernumero > primernumero && tercernumero>segundonumero){
    console.log("su tercer numero es mayor")
}

else{
    console.log("sus tres numeros son iguales")
}