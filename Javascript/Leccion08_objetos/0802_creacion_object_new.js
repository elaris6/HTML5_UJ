/** CREACION OBJETOS */

/** Además de la forma normal de crear un objeto mediante
 * su asignación a una variable "let objeto = {}", se pueden
 * crear objetos mediante la palabra reservada "new".
 * No es lo más habitual, pero se puede encontrar.
 */

// Creación de un objeto vacío en memoria.
let persona3 = new Object();

// Creación y asignación de propiedades.
persona3.nombre = 'Mari';
persona3.profesion = 'Enfermera';
persona3.movil = '666777888';
// Se puede crear una propiedad sin inicializarla.
persona3.edad;

console.log(persona3.nombre);
console.log(persona3.edad);