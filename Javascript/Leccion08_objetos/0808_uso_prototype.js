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

/** Si se crea una propiedad en uno de los objetos creados, ésta
 * solo estará disponible para ese objeto.
 */

p1.movil = '666777888';
console.log(p1.movil);
// Para p2 la propiedad quedará "undefined"
console.log(p2.movil);

/** Para agregar una propiedad a todos los objetos, sin modificar
 * el constructor, se deberá hacer uso de la propiedad "prototype".
 */

Persona.prototype.profesion = 'sin especificar';
console.log(p2.profesion);

/** Una vez creado, el valor podrá ser usado con normalidad. */
p1.profesion = 'pm';
console.log(p1.profesion);