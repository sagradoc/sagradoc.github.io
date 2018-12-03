function comprobarFct(){
    limpiarResultados();
    var checkBoxes = document.querySelectorAll('input[type=checkbox]');
    for (var i=0; i<checkBoxes.length; i++) {
        var asignatura = checkBoxes[i];
        if(asignatura.checked){
            if(asignatura.name=="si" || asignatura.name=="sr"){
                mostrarNo(); 
                return false;              
            } 
        }
    }
    mostrarSi(); 
    return false;
}
function mostrarNo(){
    var resultado = document.querySelector("#no");
    resultado.style.display = "block";
}
function mostrarSi(){
    var resultado = document.querySelector("#si");
    resultado.style.display = "block";
}
function limpiarResultados(){
    var si = document.querySelector("#si");
    si.style.display = "none";
    var no = document.querySelector("#no");
    no.style.display = "none";
}

