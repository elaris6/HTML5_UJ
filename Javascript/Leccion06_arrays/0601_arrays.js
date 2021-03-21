/** ARRAYS */
/** En Javascript los arrays tienen un tamaño dinámico.
 * Se pueden declarar arrays de diferentes formas. */

// Forma clásica, no recomendada pero aún usada.
let array1 = new Array('ele1','ele2','ele3');

// Si es un array que no se modificará
const array2 = ['ele1','ele2','ele3'];
console.log(array2);

/** Los elementos individuales se acceden con el índice
 * asociado a cada uno que comienza en 0 pera el primer
 * elemento.
 */
console.log(array2[1]);

/** Para recorrer un array completo, lo habitual es hacerlo
 * con un bucle FOR y la propiedad "length" sobre el array.
 */

for (let i = 0; i < array2.length; i++) {
    console.log(array2[i]);
}

/** Se puede modificar un elemento directamente accediendo a
 * el mediante su índice.
 */
array2[2] = 'ele3mod';
console.log(array2);

/** PUSH. Agregar elementos al final del array. */
array2.push('ele4');
console.log(array2);

/** Se puede agregar un elemento al final usando la propiedad "length". */
array2[array2.length] = 'ele5';
console.log(array2);

/** Se permite también agregar elementos dejando índices vacíos, aunque
 * estos espacios no asignados ocuparán igualmente memoria.
 * Esto NO es recomendable salvo necesidad muy concreta.
 */
array2[7] = 'ele8';
console.log(array2);
// Un ínidice sin asignar tendrá un elemento "undefined".
console.log(array2[6]);

/** Indentificar arrays con "isArray" (desde ECMA2015)
 * ó "instanceof".
 */
console.log(typeof array2);
console.log(Array.isArray(array2));
console.log(array2 instanceof Array);