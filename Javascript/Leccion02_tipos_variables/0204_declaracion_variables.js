/** Información de literales */
1
27
'cadena de texto'

/** La declaración de variables ya no se recomienda mediante el uso de
 * la palabra reservada "var". */

/** Se pueden declarar variables simplemente indicando el nombre de la
 * misma, aunque no es una buena práctica. */
nombre = 'Isra';
console.log(nombre);

/** En lugar de usar "var", o simplemente el nombre de la variable, la
 * buena práctica es usar "let" para declarar una variable, y "const" 
 * para declarar una constante.
 */

let variable = 'valor';
console.log(variable);

const constante = 27;
console.log(constante);
/** No se permite reasignar valores a variables definidas como constantes. */
//constante = 15;

/** La nomenclatura para las variables en JS por convención es lowerCamelCase,
 * no pueden comenzar por números ni símbolos salvo "$" ó "_". No se permite el
 * uso de palabras reservadas.
 * JS es sensible a mayúsculas y minúsculas.
 * Se pueden declarar o asignar varias variables en una misma línea.
 */

let nombreCompleto = 'Israel Balboa';
console.log(nombreCompleto);

let _x, $y;
_x=10, $y=7;
let z = _x + $y;
console.log(z);

