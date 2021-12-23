'use strict'

var numero1 = parseInt(
    prompt( "Ingrese el primer numero" )
);
console.log( numero1 );
var numero2 = parseInt(
    prompt( "Ingrese el segundo numero" )
);
console.log( numero2 );
while( numero1 != numero2 ) {
    if( numero1 > numero2 ) {
        document.write( numero1-- + " " );
    } else {
        document.write( numero1++ + " " );
    }
}