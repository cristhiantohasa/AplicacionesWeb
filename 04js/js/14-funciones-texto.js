'use strict'

///transformacion de textos
var numero = 1;
var texto1 = "hola";
var texto2 = "Bienvenido";
//convertir a cadena un numero
var num = numero.toString();
var dato1 = texto1.toUpperCase();
var dato2 = texto2.toLowerCase();
console.log(num, dato1, dato2);

//  Calcular la longitud
var nombre = "Daniel"
console.log(nombre.length);

//  Concatenacion
var texto3 = texto1.concat(" con " + texto2);
console.log(texto3);

//  Buscar la primera coincidencia dentro de una cadena
var busqueda = texto1.indexOf("clase");
var busqueda = texto1.lastIndexOf("clase");
var busqueda = texto1.search("clase");  //Igual que indexOf sino existe devuelve -1
var busqueda = texto1.search("texto");
var busqueda = texto1.match(/curso/g);//devuelve una coleccion de los resultados que encuentre
var busqueda = texto1.substr(4,7);//saca desde el caracter 4 hasta el 7
var busqueda = texto1.charAt(10);//sacar una letra de una cadena
var busqueda = texto1.startsWith("clase");//true o false busca al inicio del string
var busqueda = texto1.endsWith("clase");//al final del string
var busqueda = texto1.includes("clase");//buscar en un string en una palabra
var busqueda = texto1.replace("clase", "aula");//cambiar un texto por otro
var busqueda = texto1.slice(3);//separar un string a partir de un caracter
var busqueda = texto1.slice(3,6);//separar un string a partir de un caracter
var busqueda = texto1.split(" ");//separar un string a partir de un caracter en este caso por los espacios y los hace un array
var busqueda = texto1.trim();//quitar los espacios por delante y detras
console.log(busqueda);