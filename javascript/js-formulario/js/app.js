function validar(){
    var nombre = document.forms["registro"]["nombre"];
    var email = document.forms["registro"]["email"];
    var password = document.forms["registro"]["password"];
    var passwordRepetida = document.forms["registro"]["password-repetida"];
    if(nombre.value==""){       
        alert("El campo nombre está vacío");
        nombre.focus();
        return false;
    } else if(email.value==""){
        alert("Rellena el email");
        email.focus();
        return false;
    } else if(password.value==""){
        alert("Rellena el password");
        password.focus();
        return false;
    } else if(passwordRepetida.value==""){
        alert("Repite el password");
        passwordRepetida.focus();       
        return false;
    } else if(password.value!=passwordRepetida.value){
        alert("Las contraseñas no coinciden");
        password.focus();
        return false;
    } else {
        alert("El formulario es correcto");
        return true;
    }
}