// Verificar si un número es palíndromo
function esPalindromo(numero) {
    let numeroString = numero.toString(); // Cambiar "tostring" a "toString"
    let numeroreverso = numeroString.split('')   
        .reverse().join(''); // Separar línea para mayor claridad

    let esPalindromo = numeroString === numeroreverso; // Corregir espaciado

    return esPalindromo;
}

console.log(esPalindromo(12321)); // Debería devolver true
console.log(esPalindromo(12345)); // Debería devolver false

