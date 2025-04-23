function generarSerieFibonacci(n) {
    let fibonacci = []; 

    if (n > 0) fibonacci[0] = 0;
    if (n > 1) fibonacci[1] = 1; 

    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; 
    }

    return fibonacci; 
}


let cantidad = 10; 
let serieFibonacci = generarSerieFibonacci(cantidad);
console.log(`Los primeros ${cantidad} números de la serie de Fibonacci son: ${serieFibonacci}`);
