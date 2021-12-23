'use strict'

var valor = parseInt(
    prompt( "Ingresar valor" )
);

for( let i = 0; i < valor; i++ ) {
    if( (valor % i ) == 0 ) 
        document.write( i + " " );
}