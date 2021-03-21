/** FUNCIONES */

/** Al igual que para las variables, la buena práctica es
 * usar lowerCamelCase.
 */

/** Las funciones se pueden declarar antes o incluso después
 * de ser llamadas. A esta propiedad se la conoce como "Hoisting".
 */

// Invocación o llamada a la función
miSuma(7,4);

// Declaración función
function miSuma(a, b){
    // Cuerpo de la función
    console.log("La Suma es: " + (a + b));
}

// Invocación o llamada a la función
miSuma(2,3);

/** Una función puede retornar un resultado. La función finalizará
 * en el momento de ejecutar una sentencia "return".
 * Si no se agregar la sentencia "return", el intérprete lo agrega
 * de forma implícita al final de la función.
 */
function miMulti(a, b){
    return a * b;
}

// Asignación del retorno de una función a una variable.
let result = miMulti(3,5);
console.log(result);