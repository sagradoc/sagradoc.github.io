$(document).ready(function(){
    $("#btn-parrafos").click(function(){
        if($(this).text()=="Ocultar párrafos"){
            $(this).text("Mostrar párrafos");
        } else if($(this).text()=="Mostrar párrafos"){
            $(this).text("Ocultar párrafos");
        }
        $("p").toggle(); 
    });
});
