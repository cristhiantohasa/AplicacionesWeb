'use strict'

$(document).ready(function(){

    //  Eventos mouseover y mouseout
    var caja=$("#caja"); 
    /*caja.mouseover(function(){
        $(this).css("background","green");
    });
    caja.mouseout(function(){
        $(this).css("background","blue");
    });
    */
    function cambiarVerde(){
        $(this).css("background","green");
    }
    function cambiarAzul(){
        $(this).css("background","blue");
    }
    
    //  Hover hace lo mismo que lo anterior pero más rápido y sencillo
    caja.hover(cambiarVerde,cambiarAzul);

    //  Click
    /*caja.click(function(){
        $(this).css("background","pink")
               .css("color","white");
    });*/
    
    //  Doble click
    caja.dblclick(function(){
        $(this).css("background","red")
               .css("color","white");
    });
    caja.on("click",function(){
        $(this).css("background","#ccc")
               .css("color","white");
    });

    //  Focus-blur
    var nombre=$("#nombre");
    var datos=$("#datos");
    nombre.focus(function(){
        $(this).css("border","2px solid blue");
    });
    nombre.blur(function(){
        $(this).css("border","2px solid red");
    });

    //  Mousedown-mouseup
    datos.mousedown(function(){
        $(this).css("border-color","yellow");
    });
    datos.mouseup(function(){
        $(this).css("border-color","red");
    });

    //  Mousemove movimiento del mouse
    $(document).mousemove(function(){
        console.log("Posicion en X: "+event.clientX);
        console.log("Posicion en Y: "+event.clientY);
        $('body').css("cursor","none");
        $('#sigueme').css("left",event.clientX)
                     .css("top",event.clientY);
    });

});