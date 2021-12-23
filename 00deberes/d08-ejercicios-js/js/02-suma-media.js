'use strict'

var total = 0;
var valor = 0;
var i = -1;
do{
    total = total + valor;
    var valor = parseInt(
        prompt( "Ingresar valor" )
    );
    i++;
    console.log( valor );
} while( valor >= 0 );
document.write( "La suma es: " + total + "<br>" );
document.write( "El promedio es " + total/i + "<br>" );