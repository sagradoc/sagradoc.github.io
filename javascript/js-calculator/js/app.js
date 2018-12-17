function calcular(){
    a = document.getElementById('primer').value;
    b = document.getElementById('segun').value;
    if(!validar(a,b)){
        return false;
    } else {
        a = Number(a);
        b = Number(b);
        calcularSuma(a,b);
        calcularResta(a,b);
        calcularMultiplicar(a,b);
        calcularDivision(a,b);
    }
    return false;
}
function validar(a,b){
    if(a==''||b==''){
        alert('Rellena los dos operandos');
        return false;
    }
    if(isNaN(a)||isNaN(b)){
        alert('Los dos operandos deben ser números');
        return false;
    }
    return true;
}
function calcularSuma(a,b){
    suma = a + b;
    var p = document.createElement("p");
    var texto = document.createTextNode("Suma: " + suma);
    p.appendChild(texto);
    var resultado = document.getElementById("resultado-suma");
    resultado.appendChild(p);

    return true;
}
function calcularResta(a,b){
    resta = a - b;
    var p = document.createElement("p");
    var texto = document.createTextNode("Resta: " + resta);
    p.appendChild(texto);
    var resultado = document.getElementById("resultado-resta");
    resultado.appendChild(p);

    return true;

}
function calcularMultiplicar(a,b){
    multiplicacion = a * b;
    var p = document.createElement("p");
    var texto = document.createTextNode("Multiplicación: " + multiplicacion);
    p.appendChild(texto);
    var resultado = document.getElementById("resultado-multiplica");
    resultado.appendChild(p);

    return true;

}
function calcularDivision(a,b){
    division = a / b;
    var p = document.createElement("p");
    var texto = document.createTextNode("División: " + division);
    p.appendChild(texto);
    var resultado = document.getElementById("resultado-divide");
    resultado.appendChild(p);

    return true;
}