'use strict'

let contraseñauser;
let claveCorrecta = "7568";
let intentos = 0;

do{
    contraseñauser=prompt("ingrese su clave")
    intentos++
    if(contraseñauser==claveCorrecta){
        break
    }
} while (intentos!=3)
    alert(contraseñauser==claveCorrecta ? "operacion exitosa" : "bloqueo de tarjeta")
    
