
function obtenerNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
  }
  
  let jugador1 = obtenerNumeroAleatorio();
  let jugador2 = obtenerNumeroAleatorio();
  
  console.log("Jugador 1 obtiene:", jugador1);
  console.log("Jugador 2 obtiene:", jugador2);
  
  jugador1 += obtenerNumeroAleatorio();
  jugador2 += obtenerNumeroAleatorio();
  
  console.log("Jugador 1 ahora tiene:", jugador1);
  console.log("Jugador 2 ahora tiene:", jugador2);
  
  
  let quiereTerceraCarta1 = true; 
  if (quiereTerceraCarta1) {
    jugador1 += obtenerNumeroAleatorio();
    console.log("Jugador 1 ahora tiene:", jugador1);
  }
  
  let quiereTerceraCarta2 = true; 
  if (quiereTerceraCarta2) {
    jugador2 += obtenerNumeroAleatorio();
    console.log("Jugador 2 ahora tiene:", jugador2);
  }
  
  if (jugador1 > 21) {
    console.log("Jugador 1 se pasó de 21. Jugador 2 gana.");
  } else if (jugador2 > 21) {
    console.log("Jugador 2 se pasó de 21. Jugador 1 gana.");
  } else if (jugador1 === jugador2) {
    console.log("Es un empate.");
  } else if (jugador1 > jugador2) {
    console.log("Jugador 1 gana.");
  } else {
    console.log("Jugador 2 gana.");
  }
  
  