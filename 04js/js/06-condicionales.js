'use strict'

/*
    Condicional if
        si A es igual a B entonces haz algo
        operadores relacionales:
        mayor: >
        menor: <
        mayor igual: >=
        menor igual: <=
        igual: == ===
        distinto: !=
 */
var edad=80;
var nombre="Luis";
if(edad>=18){
    console.log(nombre+" es mayor de edad");
    if(edad<=30){
        console.log("Eres joven");
    }else if(edad<=65){
        console.log("Eres anciano");
    }else{
        console.log("Eres un adulto mayor");
    }
}else{
    console.log(nombre+" es menor de edad");
}

/*
    Operadores lógicos
        AND (y): &&
        OR (o): ||
        NOT: !
*/
var anio=2021;
if(anio!=2025){
    console.log("El anio no es 2025,  estamos en "+anio);
}
if(anio>=2019&&anio<=2021){
    console.log("Estamos en pandemia");
}