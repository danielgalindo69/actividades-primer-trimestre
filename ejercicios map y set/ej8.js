
// pasar de celsius a farenhent

let temperatura = parseInt(prompt("ingrese la temperatura"))

let menu = parseInt(prompt("1.para celsiu, 2.para farent"))

switch(menu){
    case 1 :{
        convertirdecelsiusAfarent(temperatura)
    }

    case 2 : {
        convertirdefarentAcelsius(temperatura)
    }

    default :{
        console.log("opcion mamala")
    }
}

function convertirdecelsiusAfarent(temperatura){
      
     let nuevatem = (temperatura * 9/5) + 32;
     return nuevatem;
}

function convertirdefarentAcelsius(){
    let nuevatem = (temperatura - 32) * 5/9;
     return nuevatem;
}