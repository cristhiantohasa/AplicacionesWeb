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
        if ( (numero1 % 2) != 0 )
            document.write( numero1-- + " " );
        else
            numero1--;
    } else {
        if ( (numero1 % 2) != 0 )
            document.write( numero1++ + " " );
        else
            numero1++;
    }
}