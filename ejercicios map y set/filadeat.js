const cola = [];
const capacidadMaxima = 7;

function agregarCliente() {
  if (cola.length >= capacidadMaxima) {
    alert("La cola está llena. No se pueden agregar más clientes.");
    return;
  }
  const nombre = prompt("Ingrese el nombre del cliente:");
  if (nombre) {
    cola.push(nombre);
    alert(`${nombre} ha sido agregado(a) a la cola.`);
  } else {
    alert("Nombre no válido.");
  }
}

function atenderCliente() {
  if (cola.length === 0) {
    alert("No hay clientes para atender.");
    return;
  }
  const cliente = cola.shift();
  alert(`Se ha atendido a ${cliente}.`);
}

function mostrarCola() {
  if (cola.length === 0) {
    alert("La cola está vacía.");
  } else {
    let mensaje = "Clientes en la cola:\n";
    cola.forEach((cliente, index) => {
      mensaje += `${index + 1}. ${cliente}\n`;
    });
    alert(mensaje);
  }
}

function menu() {
  let opcion;
  do {
    opcion = prompt(
      "Cola de Atención de Clientes\n" +
      "1. Agregar cliente\n" +
      "2. Atender cliente\n" +
      "3. Ver cola\n" +
      "4. Salir\n\n" +
      "Seleccione una opción:"
    );

    switch (opcion) {
      case "1":
        agregarCliente();
        break;
      case "2":
        atenderCliente();
        break;
      case "3":
        mostrarCola();
        break;
      case "4":
        alert("¡Gracias por usar el sistema!");
        break;
      default:
        alert("Opción no válida.");
    }
  } while (opcion !== "4");
}


menu();