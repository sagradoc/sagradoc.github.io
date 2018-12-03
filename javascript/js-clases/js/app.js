// Ocultar H1s
function ocultarPorNombreEtiqueta(etiqueta){
    var lista = document.getElementsByTagName(etiqueta);
    for(var i=0; i<lista.length; i++){
        lista[i].style.display = "none";
    }
}
document.getElementById("a-h1").addEventListener("click", function(event){
    event.preventDefault();
    ocultarPorNombreEtiqueta("h1");
}); 
// Ocultar H2s
document.getElementById("a-h2").addEventListener("click", function(event){
    event.preventDefault();
    ocultarPorNombreEtiqueta("h2");
}); 
// Ocultar Ps
document.getElementById("a-p").addEventListener("click", function(event){
    event.preventDefault();
    ocultarPorNombreEtiqueta("p");
}); 
