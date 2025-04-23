let modelo_del_carro = Number(prompt("Ingrese el modelo de su carro"));

if (
modelo_del_carro === 119 ||
modelo_del_carro === 179 ||
modelo_del_carro === 221 ||
modelo_del_carro === 780 ||
(modelo_del_carro >= 189 && modelo_del_carro <= 195)
) {
console.log("Su carro está defectuoso, por favor llévelo a garantía.");
} else {
console.log("Parchado caballero");
}


