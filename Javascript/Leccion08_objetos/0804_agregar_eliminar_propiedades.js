/** AGREGAR O ELIMINAR PROPIEDADES */

let persona = {
    nombre: 'Isra',
    apellido: 'Balboa',
    edad: 42,
    casado: true,
    hijos: 2
}

// CREAR PROPIEDAD
/** Una vez creado un objeto, se pueden añadir propiedades
 * de forma dinámica.
 * Hay que tener cuidado al acceder a las propiedades existentes
 * pues podríamos crear una nueva por error.
 */
persona.movil = '666999777';

console.log(persona);

// ELIMINAR PROPIEDAD
/** Para borrar una propiedad de un objeto se hará uso de la
 * palabra reservada "delete", eliminando tanto la propiedad
 * como su valor.
 */

delete persona.apellido;
console.log(persona);