'use strict'

do {
    var valor = parseInt(
        prompt( "Ingrese el primer numero" )
    );
    console.log( valor );
} while(isNaN( valor ));

if( (valor % 2 ) == 0 ) 
    document.write( "Par" );
else
    document.write( "Impar" );