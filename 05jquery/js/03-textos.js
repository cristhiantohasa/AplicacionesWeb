'use strict'

$(document).ready(function(){
    cargarLinks();
    $('#add_button').removeAttr('disabled')
                    .click(function(){
                        /*
                            append -> insertar luego
                            prepend -> insertar antes
                            ::before -> insertar antes
                            ::after -> insertar luego
                        */
                        $("#menu").append('<li><a href="'+$("#add_link").val()+'"></a></li>');
                        $("#add_link").val('');
                        cargarLinks();
                    });

});
function cargarLinks(){
    $('a').each(function(){
        var enlace=$(this).attr("href");
        var thiss=$(this);
        thiss.attr('target',"_blank");
        thiss.text(enlace);
    });
}