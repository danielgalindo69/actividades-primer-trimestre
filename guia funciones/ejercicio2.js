function esPrimo(n) {

    if (n <= 1) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    
    return true;
}
let numero = 17;
let resultado = esPrimo(numero);
console.log(`¿El número ${numero} es primo? ${resultado}`);

  

    