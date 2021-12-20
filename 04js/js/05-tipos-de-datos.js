'use strict'

/*
    Sin comillas es numero
    Con comillas es cadena
    Las comillas dobles son mas importantes que las simples
*/
var numero=5;
var numero2="6";
var suma=numero+numero2;
console.log(numero);
console.log(numero2);
console.log(suma);

/*
    Tipos de datos
        enteros
        string
        float 
        booleano
        array
        objetos
*/
var cadena="Hola, bienvenido";
var verdadero_falso=true;   // false - 0 o 1
var numero_falso="3";
console.log(numero_falso);
console.log(verdadero_falso);

//  Funciones de conversion
//  Convertor de cadena a numero
console.log(Number(numero_falso));
console.log(+numero_falso);
//  Convertor de numero a texto
console.log(String(numero));

//  Conocer el tipo de dato
console.log(typeof numero_falso);
console.log(typeof numero);
console.log(typeof verdadero_falso);

//NaN -> Not a number