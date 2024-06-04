'use strict'

//funcion suma
let suma=function(a,b){
    suma=a + b;
    alert("el resultado es" + suma)

}

//funcion resta
let resta = (a,b) => a - b;

function calc (op, fnsum, fnrest){
let number1 =Number(prompt("ingrese el primer numero: ")); 
let number2 =Number(prompt("ingrese el segundo numero: "))
if (op === "suma"){
    fnsum(number1, number2);
}else{
    alert(fnrest(number1, number2))
}
    }

//llamar a la funcion
calc ("suma", suma, resta);