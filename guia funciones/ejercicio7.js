function contarVocales(texto) {
    let numeroDeVocales = 0;
    let vocales = "aeiouAEIOU";

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            numeroDeVocales++;
        }
    }

    return numeroDeVocales;
}


let cadena = "Hola, mundo"; 
let resultado = contarVocales(cadena);
console.log(`El número de vocales en "${cadena}" es ${resultado}`);
