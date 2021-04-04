/** MODO STRICT */
/** Aunque en Javascript no es obligatorio declarar las variables
 * para poder usarlas, es una buena práctica el hacerlo.
 * Para forzar que no se pueda usar una variable sin haberla declarado
 * se puede usar lo que se conoce como modo estricto o "strict".
 */
/** El modo estricto se define con la instrucción "use strict",
 * INCLUYENDO las comillas. Se puede usar al inicio del programa, como
 * primera línea, o como primera línea de una función, para que aplique
 * solo a ésta.
*/

"use strict";

/** SI usamos el modo "strict", esta línea dará error por uso de variable
 * no declarada.
 */
x = 10;
console.log(x);

function miFuncion(){
    "use strict";
    y = 3;
    console.log(y);
}

miFuncion();
console.log("Fin");
