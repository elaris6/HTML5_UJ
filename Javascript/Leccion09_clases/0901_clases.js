/** CLASES */
/** Las clases en Javascript funcionan son muy parecidas al uso de
 * objetos con función a modo de constructor.
 * La buena práctica es usar UpperCamelCase para nombrar las clases. */

/** HOISTING y CLASES */
/** Cuando se trabaja con clases no se aplica el concepto de "hoisting".
 * Es decir, no se puede intentar instanciar la clase antes de haberla
 * definido.
 */

// Esto no se permite
//let pTemp = new Persona('Nombre','Apellido');

class Persona {

    /** Constructor de clase. Se crea vacío por defecto si no se agrega.
     * Se acostumbra a nombrar las propiedades comenzando con guión bajo,
     * para poder poner el nombre sin guión bajo a los métodos "get" y "set".
     */
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
}

let p1 = new Persona('Isra','Balboa');
console.log(p1);

let p2 = new Persona('Mari','Cuesta');
console.log(p2);

let p3 = new Persona('Rubén','Balboa');
// Llama a "get nombre"
console.log(p3.nombre);

// Llama a "set nombre"
p3.nombre = 'Alicia';
console.log(p3.nombre);