
    const productos = ["Galleta", "Chicle", "Papitas", "Gaseosa", "Chocolate"];
    const cantidades = [3, 2, 4, 1, 0]; 

    function mostrarInventario() {
      console.log(`como productos hay:${productos} con estas cantidades${cantidades}`)
    }

    function sugerirProducto() {
      for (let i = 0; i < cantidades.length; i++) {
        if (cantidades[i] > 0) {
          return productos[i];
        }
      }
      return null;
    }

    function comprarProducto() {
      const codigo = parseInt(prompt("Ingresa el código del producto (1-5):"));
      if (isNaN(codigo) || codigo < 1 || codigo > productos.length) {
        alert("Código inválido.");
        return;
      }

      const indice = codigo - 1;

      if (cantidades[indice] === 0) {
        const sugerido = sugerirProducto();
        if (sugerido) {
          alert(`Producto agotado. Te sugerimos probar con: ${sugerido}`);
        } else {
          alert("Todos los productos están agotados. 😢");
        }
        return;
      }

      const moneda = prompt("Inserta una moneda de $1 para comprar:");
      if (moneda !== "1") {
        alert("Pago incorrecto. Solo se acepta $1.");
        return;
      }

      cantidades[indice]--;
      alert(`¡Gracias por tu compra! Disfruta tu ${productos[indice]} 🍬`);
    }

    function menu() {
      let opcion;
      do {
        opcion = prompt(
          "Máquina Expendedora 🍭\n" +
          "1. Mostrar inventario\n" +
          "2. Comprar producto\n" +
          "3. Salir\n\n" +
          "Selecciona una opción:"
        );

        switch (opcion) {
          case "1":
            mostrarInventario();
            break;
          case "2":
            comprarProducto();
            break;
          case "3":
            alert("¡Gracias por usar la máquina expendedora!");
            break;
          default:
            alert("Opción inválida.");
        }
      } while (opcion !== "3");
    }

    menu();
  





