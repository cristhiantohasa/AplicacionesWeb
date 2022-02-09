'use strict'

//  Evento ready: verifica que toda la pagia este cargada
$(document).ready(function(){

    //console.log("Ok");
    // Seleccion de parrafos
    var rojo=$("#rojo").css("background","red");

    //  Encadenamiento de elementos
    var amarillo=$("#amarillo").css("background","yellow")
                               .css("color","red");

    var verde=$("#verde").css("background","green")
                               .css("color","white");
    
    //  Selectores de clase
    var miClase=$(".zebra");
    miClase.css("padding","20px")
    $(".sin_borde").click(function(){
        $(this).addClass("zebra");
    });

    //  Selectores por etiqueta
    var parrafos=$('p').css("cursor","pointer");
    parrafos.click(function(){
        var thiss=$(this);
        if(thiss.hasClass('zebra')){
            thiss.addClass('grande');
        }
    });

    //  Selectores de varias etiquetas
    $('p,a').addClass('margenSuperior');
    
    //  Seleccion de atributos
    $('[title="Google"]').css("background","green")
                       .css("color","white");
    $('[title="Facebook"]').css("background","blue")
                       .css("color","white");

    var busqueda=$('#caja').find(".resaltado");
    console.log(busqueda);
    
    //  Parent permite saltar etiquetas
    var busqueda2=$('#elemento2').parent().parent().find(".resaltado");
    console.log(busqueda2);
    
});