/** Funciones flecha. Desde ECMAScript6 */

// Ejemplo función como expresión
let resta = function (a, b) { return a - b };
let resultado = resta(7,4);
console.log(resultado);

/** Suelen referenciarse a "const", porque lo habitual es asignar
 * la referencia a la función una vez y no volver a modificarla
 * posteriormente.
 */
// Mismo ejemplo con función tipo flecha
const restaFuncTipoFlecha = (a, b) => a - b;
resultado = restaFuncTipoFlecha(5, 2);
console.log(resultado);