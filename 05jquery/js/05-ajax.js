'use strict'

$(document).ready(function(){
    /*
        Ajax permite realizar peticiones asincronas a un servidor
        sin necesidad de recargar la pagina entera, solo un pedazo
        load para obtener informacion por get e incrustar en la pagina
        peticion ajax
        $("#datos").load("https://reqres.in/api/users");
        request
        response
    */
    $.get("https://reqres.in/api/users",{page:1},function(response){
        response.data.forEach((element,index) => {
            $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
        });
    });
    $("#formulario").submit(function(e){
        e.preventDefault(); //  Evitar la redireccion
        var usuario={
            nombre:$('input[name="name"]').val(),
            web:$('input[name="web"]').val()
        };
        $.ajax({
            type:'POST',
            url:$(this).attr("action"),
            data:usuario,
            beforeSend:function(){
                console.log("usuario enviado");
            },
            success:function(response){
                console.log(response);
            },
            error:function(){
                console.log("Se ha producido un error");
            },
            timeout:1000    //  Tiempo maximo para la peticion
        });
        return false;
    });
});