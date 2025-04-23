alert ("Bienvenido al inicio de sesion")
alert("A continuacion porfavor ingrese los siguentes datos")

let nombre = prompt("ingrese su nombre porfavor")
let correo_para_ingresar =prompt("porfavor ingrese su correo")
alert ("la contraseña que va a ingresar solo recibe numeros")
let contraseña_para_ingresar = Number(prompt("favor ingrese su contraseña"))
let correoregistrado = "DONPOLLO69";
let contraseñaregistrada = "123456";

if (correoregistrado == correo_para_ingresar && contraseña_para_ingresar == contraseñaregistrada){
    alert(`bienbenido de nuevo ${nombre}`)
}

else{
    console.log("porfavor vuelva e intentelo otra vez")
}