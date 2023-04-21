/* APLICACIÓN DE AJAX CON JQuery */

$("#boton-AJAX").click(function(){
    var esperar = 2000;
    $.ajax({
        url: "../html/ajax.html",
        beforeSend : function(){
            $("#contenido").text("Cargando...");
        },

        success : function(data){
            setTimeout(function(){
                $("#contenido").html(data);
            }, esperar
            );
        }

    })
});