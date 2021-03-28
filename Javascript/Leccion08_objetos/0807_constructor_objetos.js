/** Para crear un constructor de objetos y poder reutilizar la
 * estructura creada se debe crear una función junto con la palabra
 * reservada "new".
 * Para diferenciarla de funciones normales, la buena práctica es
 * comenzar el nombre del contstructor por mayúscula. */

// Función constructor de objetos de tipo persona
function Persona(nombre, apellido, edad = 0){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

// Creación de objetos de tipo persona
let p1 = new Persona('Isra','Balboa',42);
let p2 = new Persona('Mari','Cuesta',40);

// Impresión de los objetos
console.log(p1);
console.log(typeof p1);
console.log(p2);
console.log(p2.nombreCompleto());


/** Distintas formas de crear objetos. */

// Creación formal
let miObjeto = new Object();
// Recomendado
let miObjeto2 = {};

let miArray = new Array();
let miArray2 = [];

let miCadena = new String('cadena');
let miCadena2 = 'cadena';

let miNumero = new Number(1);
let miNumero2 = 1;

let miFuncion = new Function();
let miFuncion2 = function(){};

