'use strict'

/*
    Funciones
    son un agrupacion reutilizable de un conjunto de instrucciones
*/
    function mensaje(){
    console.log("Hola");
    alert("Bienvenido");
    return "OK";
}

//  Llamar o invocar a la funcion
var resultado=mensaje();
console.log(resultado);

//  Funcion con parametros
function suma(numero1, numero2){
    console.log("Suma "+(numero1+numero2));
}
suma(6,5);
function calculadora(numero1, numero2){
    console.log("Suma "+(numero1+numero2));
    console.log("Resta "+(numero1-numero2));
    console.log("Multiplicacion "+(numero1*numero2));
    console.log("Division "+(numero1/numero2));
}
calculadora(5,2);

//  Funcion con parametros adicionales
function calculadora2(numero1, numero2,mostrar=false){
    if(mostrar==false){
        console.log("Suma "+(numero1+numero2));
        console.log("Resta "+(numero1-numero2));
        console.log("Multiplicacion "+(numero1*numero2));
        console.log("Division "+(numero1/numero2));
    }else{
        document.write("Suma "+(numero1+numero2)+"<br>");
        document.write("Resta "+(numero1-numero2)+"<br>");
        document.write("Multiplicacion "+(numero1*numero2)+"<br>");
        document.write("Division "+(numero1/numero2)+"<br>");
    }
    
}
calculadora2(6,3,true)
calculadora2(8,6);
function porConsola(numero1,numero2){
    console.log("Suma "+(numero1+numero2));
    console.log("Resta "+(numero1-numero2));
    console.log("Multiplicacion "+(numero1*numero2));
    console.log("Division "+(numero1/numero2));
}
function porPantalla(numero1,numero2){
    document.write("Suma "+(numero1+numero2)+"<br>");
    document.write("Resta "+(numero1-numero2)+"<br>");
    document.write("Multiplicacion "+(numero1*numero2)+"<br>");
    document.write("Division "+(numero1/numero2)+"<br>");
}
function calculadora3(numero1, numero2,mostrar=false){
    if(mostrar==false){
        porConsola(numero1, numero2);
    }else{
        porPantalla(numero1,numero2);
    }
}
calculadora3(9,4,true);