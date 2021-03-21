/** PARAMETROS Y ARGUMENTOS */

// Parámetros. Son la lista de valores que recibirá la función de

// Argumentos. Son los valores realmente pasados a los parámetros la invocar la función

function funcion(a, b) {
    /** Dentro de la función podemos acceder a los argumentos pasados
     * mediante el array "arguments".
    */
    console.log('Argumento 1: '+ arguments[0]);
    console.log('Argumento 2: '+ arguments[1]);

    return a + b;
}

console.log(funcion(4,5));

/** Javascript permite no enviar todos los argumentos definidos en una función,
 * aunque el desempeño de esta podrá ser incorrecto si esto no se controla
 * adecuadamente.
 */

console.log(funcion(6));

/** También se pueden definir valores por defecto para los parámetros en la
 * definición de una función.
 */

function otraFuncion(a = 0, b = 0) {
    /** Dentro de la función podemos acceder a los argumentos pasados
     * mediante el array "arguments".
    */
    console.log('Argumento 1: '+ arguments[0]);
    console.log('Argumento 2: '+ arguments[1]);
    // Se puede acceder a un parámetro no definido
    console.log('Argumento 3: '+ arguments[2]);

    return a + b;
}
// Esto si funciona correctamente al tomar "b" un valor por defecto.
console.log(otraFuncion(6));

// Pasando un argumento no definido
console.log(otraFuncion(6,4,5));


// EJERCICIO. Crear función que sume un número indefinido de parámetros recibidos.
let resultado = sumarTodo(5, 6, 3, 13, 9, 7);
console.log(resultado);

function sumarTodo(){
    let suma = 0;
    for (let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}
