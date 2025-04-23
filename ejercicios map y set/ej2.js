const preciosproductos = [500,1200,300,800,1500]
const haypreciosaltos = preciosproductos.some((num => num> 100))
console.log(haypreciosaltos)