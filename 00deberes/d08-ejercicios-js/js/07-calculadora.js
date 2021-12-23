'use strict'

do {
    var numero1 = parseInt(
        prompt( "Ingrese el primer numero" )
    );
    console.log( numero1 );
} while( numero1 < 0 || isNaN( numero1 ) );
do {
    var numero2 = parseInt(
        prompt( "Ingrese el segundo numero" )
    );
    console.log( numero2 );
} while( numero2 < 0 || isNaN( numero2 ) );

calculadora( numero1, numero2 )

function calculadora( numero1, numero2 ) {
    document.write(
        "Suma: " + ( numero1 + numero2 ) + "<br>" +
        "Resta: " + ( numero1 - numero2 ) + "<br>" +
        "Multiplicacion: " + ( numero1 * numero2 ) + "<br>"+
        "Division: " + ( numero1 / numero2 ) + "<br>"
        );
    alert(
        "Suma: " + ( numero1 + numero2 ) + "\n" +
        "Resta: " + ( numero1 - numero2 ) + "\n" +
        "Multiplicacion: " + ( numero1 * numero2 ) + "\n"+
        "Division: " + ( numero1 / numero2 ) + "\n"
    );
    console.log(
        "Suma: " + ( numero1 + numero2 ) + "\n" +
        "Resta: " + ( numero1 - numero2 ) + "\n" +
        "Multiplicacion: " + ( numero1 * numero2 ) + "\n"+
        "Division: " + ( numero1 / numero2 ) + "\n"
    )
}