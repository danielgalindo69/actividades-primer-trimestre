
let asistentes = new Map([
  [1, "Ana"],
  [2, "Luis"]
]);

let agregarAsistente = (map, clave, valor) => map.set(clave, valor);

agregarAsistente(asistentes, 3, "Sofía");

console.log(asistentes);






