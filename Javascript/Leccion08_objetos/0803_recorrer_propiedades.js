/** También se puede acceder a las propiedades como
 * si el objeto se tratase de un array, indicando
 * como índice el nombre de la propiedad.
 */

let persona = {
    nombre: 'Isra',
    apellido: 'Balboa',
    edad: 42,
    casado: true,
    hijos: 2
}

console.log(persona['casado']);

/** Se puede recorrer el "array" de propiedades con un 
 * bucle FOR, pero es un tipo especial de FOR, "for in".
*/

// FOR IN
for (nombrePropiedad in persona){
    console.log(nombrePropiedad);
    // Acceso al valor de la propuedad
    console.log(persona[nombrePropiedad]);
}