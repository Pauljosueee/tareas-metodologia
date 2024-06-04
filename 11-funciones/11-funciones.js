'use strict'

function mostrarMensaje(){
    alert("hola")
}
//mostrarMensaje();

function mostrarMensajeConNombre(nombre){
    alert("Hola"+nombre)
}
//mostrarMensajeConNombre(" Juan");

function GenerarFrase (){
    return "Hola Mundo"; 
}
alert (GenerarFrase());
let result;
result= GenerarFrase();

function sumar(a,b){
    let a=2
    let b=4
    let resuult = a+b;
    return(result)
}
alert (sumar())