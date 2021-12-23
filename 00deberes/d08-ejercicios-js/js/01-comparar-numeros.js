'use strict'

do {
    var numero1 = parseInt(
        prompt( "Ingrese el primer numero" )
    );
    console.log( numero1 );
    var numero2 = parseInt(
        prompt( "Ingrese el segundo numero" )
    );
    console.log( numero2 );
} while( numero1 < 0 || isNaN( numero1 ) || numero2 < 0 || isNaN( numero2 ) );

if( numero1 > numero2 ) {
    document.write( numero1 + " es mayor que " + numero2 + "<br>" );
} else if( numero1 < numero2 ) {
    document.write( numero1 + " es menor que " + numero2 + "<br>" );
} else {
    document.write( numero1 + " es igual que " + numero2 + "<br>" );
}