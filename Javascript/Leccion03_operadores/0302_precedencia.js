/** Las expresiones se evalúan de izquierda a derecha, pero
 * se tienen en cuenta la prioridad de los operadores.
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 */
let a = 3, b = 2, c = 6, d=4;
console.log(a * b + c);
console.log(a + b * c);
console.log(a * b + c / d);
/** Para aplicar o clarificar la prioridad de las operaciones
 * se deben aplicar agrupaciones con paréntesis.
 */
console.log((a + b) * c);