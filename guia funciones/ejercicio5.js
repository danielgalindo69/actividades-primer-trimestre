function invertirCadena(texto) {
    let cadenaInvertida = ""; 

    for (let i = texto.length - 1; i >= 0; i--) { 
        cadenaInvertida += texto[i]; 
    }

    return cadenaInvertida; 
}


let texto = "ola beva"; 
let textoInvertido = invertirCadena(texto);
console.log(`La cadena invertida de "${texto}" es "${textoInvertido}"`);
