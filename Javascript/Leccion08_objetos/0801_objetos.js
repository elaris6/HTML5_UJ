/** OBJETOS */

/** Javascript es un lenguaje orientado a objetos.
 * Aunque puede usarse de manera funcional, para desplegar
 * su potencial, requiere del uso de clases y objetos.
 */

// Creación de un objeto sencillo con varios
// atributos/propiedades.

let persona = {
    nombre: 'Isra',
    apellido: 'Balboa',
    edad: 42,
    casado: true,
    hijos: 2
}

/** Se puede acceder a cualqueir propiedad mediante
 * la nomenclatura del punto.
 */
console.log(persona.apellido);

// Se puede imprimir el objeto completo directamente
console.log(persona);

// METODOS
/** Se pueden definir métodos en un objeto, asociando una
 * función a una propiedad.
 * Para acceder a las propiedades del objeto dentro del propio
 * objeto, será necesario usar la palabra reservada "this".
*/
let persona2 = {
    nombre: 'Isra',
    apellido: 'Balboa',
    edad: 42,
    casado: true,
    hijos: 2,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    },
    aniosParaJubilarse: function(){
        return 65 - this.edad;
    }
}

console.log(persona2.nombreCompleto());
console.log(persona2.aniosParaJubilarse());