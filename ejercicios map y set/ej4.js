let asistentes = new Map([
  [101, "Carlos"],
  [102, "María"],
  [103, "José"]
]);

let verificarCodigo = (map, codigo) => map.has(codigo);

console.log(verificarCodigo(asistentes, 102)); 
console.log(verificarCodigo(asistentes, 104)); 


