window.onload = iniciar;

function iniciar() {
    alert("Bienvenido a la calculadora html!")
    document.getElementById("suma").onclick = sumar;
    document.getElementById("resta").onclick = restar;
    document.getElementById("multi").onclick = multiplicar;
    document.getElementById("divide").onclick = dividir;
    document.getElementById("reset").onclick = resetear;

}

function obtenerValores() {

    var op1 = prompt("Introduce valor del oeprando 1","0")
    document.getElementById("op1").innerHTML = op1;

    var op2 = prompt("Introduce valor del oeprando 2","0")
    document.getElementById("op2").innerHTML = op2;
}

function sumar(){
    obtenerValores();
    var op1 = document.getElementById("op1").textContent;
    var op2 = document.getElementById("op2").textContent;

    document.getElementById("res").innerHTML = parseInt(op1) + parseInt(op2);
}

function restar() {
    obtenerValores();
    var op1 = document.getElementById("op1").textContent;
    var op2 = document.getElementById("op2").textContent;

    document.getElementById("res").innerHTML = parseInt(op1) - parseInt(op2);
}

function multiplicar() {
    obtenerValores();
    var op1 = document.getElementById("op1").textContent;
    var op2 = document.getElementById("op2").textContent;

    document.getElementById("res").innerHTML = parseInt(op1) * parseInt(op2);
}

function dividir() {
    obtenerValores();
    var op1 = document.getElementById("op1").textContent;
    var op2 = document.getElementById("op2").textContent;

    if (op2 == "0") {
        alert("No se puede dividir por cero!")
        resetear;
        return;
    }
    else {
        document.getElementById("res").innerHTML = parseInt(op1) / parseInt(op2);
    }
    
}

function resetear() {
    document.getElementById("op1").innerHTML = "";
    document.getElementById("op2").innerHTML = "";
    document.getElementById("res").innerHTML = "";
}