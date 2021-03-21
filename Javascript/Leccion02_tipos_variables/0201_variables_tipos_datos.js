// TIPOS DE DATOS Y VARIABLES

/** La nomenclatura para las variables en JS por convención es lowerCamelCase,
 * no pueden comenzar por números ni símbolos salvo "$" ó "_".
 * JS es sensible a mayúsculas y minúsculas.
 * Se pueden declarar varias variables en una misma línea.
 * Los tipos básicos que existen en JS son: numérico, String, Boolean, Undefined y Null.
 * También tenemos los tipos más complejos: object, function, class, symbol.
 * */

var $variable;
var _variable;

/** Tipo String. Se pueden usar indistintamente comillas simples o dobles. */
var nombre = 'Isra';
console.log(nombre);

/** Tipo Numérico. JS detecta automáticamente si la variable numérica es entera,
 * decimal o float, asignando en memoria el tipo requerido. */
var edad = 42;
console.log(edad);

/** Tipo Boolean. Como en Java, todo en minúsculas. */
var estudiando = true;
console.log(estudiando);

/** Undefined. Variables creadas pero sin asignar, o asignadas con este valor. */
var puestoTrabajo;
console.log(puestoTrabajo);
var x = undefined;
console.log(x);

/** Null. Variables asignadas con valor vacío. No es lo mismo una variable indefinida
 * que variable vacía.
 */
puestoTrabajo = null;
console.log(puestoTrabajo);

/** Tipo object. Es un tipo complejo, que se compone a su vez de otros tipos. */
var objeto = {
    nombre: "Israel",
    apellido: "Balboa",
    edad: 42,
    estudiando: true
}
console.log(objeto);
console.log(objeto.nombre);

/** Tipo Array. En realidad son de tipo object */
var marcas = ['Harley', 'Indian', 'Triumph'];
console.log(marcas);
console.log(marcas[1]);
console.log(typeof marcas);

/** Tipo function */
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);

/** Tipo Symbol */
var simbolo = Symbol();
console.log(simbolo);
console.log(typeof simbolo);

/** Tipo clase es una function */
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);