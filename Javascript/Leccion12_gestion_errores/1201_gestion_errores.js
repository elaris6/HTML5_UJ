"use strict";

/** La gestión de errores se realiza medianta un bloque "try catch"
 * de forma similar a la sintaxis de Java.
 * El bloque "finally" es opcional y en caso de existir, se ejecuta
 * siempre.
 */

try {
    x = 10;
    console.log(x);
} catch (e) {
    console.log(e);
    console.log(e.name); // Nombre del error
    console.log(e.message); // Mensaje asociado al error
} finally {
    console.log('Código finally gestión errores');
}

console.log('El programa terminó correctamente');
