var autos:Array<string>=["mazda","ford","toyota"];
let anio:any[]=["uno","texto",45,4];
console.log(autos);
console.log(anio);

//  Tuberias permite que el dato sea string o un numero
let cadena:string|number="Texto";
cadena=5;
console.log(cadena);

/*
    Let y var
        Let para trabajar a nivel de bloque
        Var de forma global
        Igual como en js
*/
var num1=10;
var num2=2;
if(num1=10){
    let num1=4;
    var num2=6;
    console.log(num1,num2);
}
console.log(num1,num2);