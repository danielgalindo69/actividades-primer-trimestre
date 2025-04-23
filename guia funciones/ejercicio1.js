function factorial(n) {
    let resultado = 1; 
    for (let i = 1; i <= n; i++) {
        resultado *= i; // Multiplicamos el resultado actual por i en cada iteración
    }
    return resultado; // Devolvemos el resultado final
}

// Ejemplo de uso:
let numero = 5; // Puedes cambiar este valor para probar con otros números
let resultado = factorial(numero); // Llamamos a la función y guardamos el resultado
console.log(`El factorial de ${numero} es ${resultado}`); // Mostramos el resultado en la consola
