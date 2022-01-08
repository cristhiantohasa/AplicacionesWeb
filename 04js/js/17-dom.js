'use strict'

/*
    DOM - Document Object Model: arbol de todos los elementos
    que existen en una pagina
    Encontrar elementos con un ID concreto
    hay dos formas de acceder al objeto
    var caja=document.getElementById("miCaja");
*/
var caja=document.querySelector("#miCaja");
caja.style.background="red";
caja.style.padding="40px";
caja.style.color="white";
caja.innerHTML="Texto";
caja.className="hola";

//  Encontrar
console.log(caja);

//  Encontrar elementos por su etiqueta
var todosLosDivs=document.getElementsByTagName('div');
console.log(todosLosDivs);
var contenidoDiv2=todosLosDivs[2].textContent;
console.log(contenidoDiv2);
var contenidoDiv=todosLosDivs[3];
contenidoDiv.innerHTML="Otro texto";
contenidoDiv.style.background="blue";
contenidoDiv.style.color="white";
var seccion=document.querySelector("#miSeccion");
var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent=='string'){
        var parrafo=document.createElement("p");
        var texto=document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}
var hr=document.createElement("hr");
seccion.append(hr);

//  Encontrar elementos por su clase
var divRojos=document.getElementsByClassName("rojo");
var divAmarillo=document.getElementsByClassName("amarillo");
console.log(divRojos);
divAmarillo[0].style.background="yellow";
var div;
for(div in divRojos){
    if(divRojos[div].className=="rojo"){
        divRojos[div].style.background="red";
    }
}

//  Query selector permite seleccionar un elemento o el primer

//  Elemento de una clase
var id=document.querySelector("#encabezado");
console.log(id);
var claseRojo=document.querySelector(".rojo");
console.log(claseRojo);
var etiqueta=document.querySelector("div");
console.log(etiqueta);