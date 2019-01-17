$(document).ready(function(){
   
    $("#registro").submit(function(e){
        e.preventDefault();
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var email = $("#email").val();
        var password = $("#password").val();

        $(".alert").remove();

        if(nombre==""){
            $("#nombre").after(
                '<div class="alert alert-danger">No nombre</div>'
            );
        }
        if(apellido==""){
            $("#apellido").after(
                '<div class="alert alert-danger">No apellido</div>'
            );
        }
        if(email==""){
            $("#email").after(
                '<div class="alert alert-danger">No email</div>'
            );
        }
        if(password==""){
            $("#password").after(
                '<div class="alert alert-danger">No password</div>'
            );
        }
    });

});