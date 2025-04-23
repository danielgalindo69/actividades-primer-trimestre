function calcularPotencia(base, exponente) {
    let resultado = 1; 

    for (let i = 0; i < exponente; i++) {
        resultado *= base; 
    }

    return resultado; 
}


let base = 2; 
let exponente = 3; 
let resultado = calcularPotencia(base, exponente);
console.log(`${base} elevado a la ${exponente} es ${resultado}`);
