'use strict';

//forma mas comun
function sum (a,b){
    return a+b;
}

//expresion de funcion 
let sumExp = function (a,b){
    return a+b;
}

let sumFlecha= (a,b) => a + b;

let result = sumFlecha (2,3);
alert(result);