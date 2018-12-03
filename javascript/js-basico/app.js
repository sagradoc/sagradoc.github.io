document.querySelector('.btn-primary').onclick = function(){
    var caja = document.querySelector('#resultados');
    caja.innerHTML = "<h3>AZUL</h3>";
}
document.querySelector('.btn-danger').onclick = function(){
    var caja = document.querySelector('#resultados');
    caja.innerHTML = "<h3>ROJO</h3>";
}
document.querySelector('.btn-success').onclick = function(){
    var caja = document.querySelector('#resultados');
    caja.innerHTML = "<h3>VERDE</h3>";
}