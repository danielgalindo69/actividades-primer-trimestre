const usuario = "elpollo69"
const contraseña = "1234567"

const inciodesesion = prompt("ingrese su usuario")
const contraseñaingresada = Number(prompt("ingrese su contraseña"))

if (inciodesesion == usuario && contraseña == contraseñaingresada){
    console.log("su usuario fue ingresado correctamente")
}
else {
    console.log("Los datos ingresados son invalidos")
}


