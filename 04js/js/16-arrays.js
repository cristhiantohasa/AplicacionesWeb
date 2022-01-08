'use strict'

var categorias=["Accion","Drama","Terror","Comedia"];
var peliculas=["Transformers","La mascara","Titanic","Saw","American Pie"];

var cine=[categorias,peliculas];
console.log(cine[0][1]);
console.log(cine[1][0]);
console.log(cine[1][2]);

//  Operaciones con arrays

//  Agregar
peliculas.push("La era de hielo");
console.log(peliculas);

//  Eliminar un elemento
var indice=peliculas.indexOf("Saw");
console.log(indice);
if(indice>1){
    peliculas.splice(indice,1);
    console.log(peliculas);
}

//  Conversion de array a string separado por comas
var peliculas_string=peliculas.join();
console.log(peliculas_string);

//  String a Arrays
var cadena="texto1, texto1, texto3";
var cadena_array=cadena.split(",");
console.log(cadena_array);

//  Ordenar un array
console.log(peliculas.sort());

//  Invertir un array
console.log(peliculas.reverse());

//  Recorre un array -- elemento in arreglo
for(let movie in peliculas){
    document.write(peliculas[movie]);
}

//  Buscar en arrays
var busqueda=peliculas.findIndex(
    pelicula=>pelicula=="American Pie");
console.log(busqueda);

//  Busqueda con condiciones
var precios=[10,8,2,3];
var busqueda2=precios.some(precio=>precio>8);
console.log(busqueda2);