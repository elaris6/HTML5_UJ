console.log("Aplicación calculadora.")

function operar(oper) {
    const forma = document.getElementById('forma');
    let operA = parseInt(forma['operandoA'].value);
    let operB = parseInt(forma['operandoB'].value);
    let resultado;
    switch (oper) {
        case 'sum':
            resultado = operA + operB;
            break;
        case 'res':
            resultado = operA - operB;
            break;
        case 'mul':
            resultado = operA * operB;
            break;
        case 'div':
            resultado = operA / operB;
            break;
    }
    if (isNaN(resultado)) {
        document.getElementById('resultado').innerHTML = 'El resultado no es un valor numérico. Escribe valores adecuados.';
    } else {
        operA.value = '';
        operB.value = '';
        document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    }

}

function reset() {
    document.getElementById('operandoA').value = '';
    document.getElementById('operandoB').value = '';
}