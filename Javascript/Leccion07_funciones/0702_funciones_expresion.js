/** Funciones de tipo expresión o anónimas.
 * Se usan bastante en el desarrollo web con HTML.
 */

// Se pueden asignar a una variable
let x = function (a, b) { return a - b };

// La variable que tiene asignada la función se puede usar como llamada
let resultado = x(7,4);

console.log(resultado);