'use strict'

//declaracion de funcion 
function validateField(isVisible, shoe, hide){
    if (isVisible){
        show();
    }else{
        hide ();
    }
}

//expresion de funcion
let showField = function(){
    alert ("Campo visible");
}

//funcion flecha
let hideField = () => alert ("Campo oculto")

validateFiel (false, showField, hideField); 