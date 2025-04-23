let sociosActivos = new Set([5001, 5002, 5003]);

let agregarSocio = (set, numero) => set.add(numero);

agregarSocio(sociosActivos, 5004);

console.log(sociosActivos);

agregarSocio(sociosActivos, 5001);

console.log(sociosActivos);
