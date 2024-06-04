/*
Escribir una funcion que reciba como argumento la
edad de una persona y devuelva true si es mayor a 18
y false si es menor.
*/

function calcularEdad (age){
    /*if (age>=18){
       return true;
    }else{
       return false;
    }*/
    return (age>=18);
}
let edad= Number (prompt("ingrese au edad"))
let result = calcularEdad(edad);
alert ("el resultado es "+  result);


/*
Escribir una funcion que multiplique dos 
numeros y devuelva el resultados 
N: usar una sola operacion.
*/

let multiplicador =  3;
let multiplicando = 2;
for (let i=0;i < multiplicador; i++){
    suma= suma +multiplicando;
}
alert(suma);
