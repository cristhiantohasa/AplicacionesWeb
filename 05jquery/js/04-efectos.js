'use strict'

$(document).ready(function(){
    var caja=$("#caja");
    //$("#mostrar").hide();
    $("#mostrar").click(function(){
        $(this).hide();
       $("#ocultar").show();
        caja.fadeTo('slow',1);  //  FadeTo, fadeIn, fadeOut
                                //  Velocidad (slow, fast), opacidad (1-maximo, 0-minimo)
    });
    $("#ocultar").click(function(){
        $(this).hide();
       $("#mostrar").show();
        caja.slideUp('slow',function(){
            console.log("oculto");
        });
    });
    $("#todoEnUno").click(function(){
        caja.slideToggle('slow');
    });
    $("#animar").click(function(){
        caja.animate({
            marginLeft:'500px',
            fontSize:'40px',
            height:'110 px'
        },'slow')
        .animate({
            borderRadius:'900px',
            marginTop:'150 px'
        },'slow')
        .animate({
            borderRadius:'0px',
            marginTop:'0 px'
        },'slow')
        .animate({
            borderRadius:'100px',
            marginTop:'0 px'
        },'slow')
        .animate({
            marginLeft:'500px',
            fontSize:'40px',
            height:'110 px'
        },'slow')
        ;
    });
});