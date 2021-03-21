/** IMPRESION OBJETOS */
/** Al estar en un navegador web no se puede hacer
 * uso de la función "console.log(objeto)", ya que
 * se imprimirá algo como "[object Object]"
 * */

let persona = {
    nombre: 'Isra',
    apellido: 'Balboa',
    edad: 42,
    casado: true,
    hijos: 2
}
console.log(persona);

// FORMAS DE IMPRESION

// Concatenación de las propiedades individuales
console.log(persona.nombre+','+persona.apellido+','+persona.hijos+','+persona.casado+','+persona.hijos+','+persona.edad)

// Bucle "for in"
for(nomProp in persona){
    console.log(persona[nomProp]);
}

/** Método "values", asociada a la clase Object,
 * que devolverá un array con los valores de cada una de las
 * propiedades del objeto.
 */
let personaArray = Object.values(persona);
console.log(personaArray);

/** Método "stringify" de la clase JSON, que convertirá el
 * objeto en un string que se asemeja mucho a la estructura
 * de impresión de un objeto, mediante impresión directa.
 * */
let personaString = JSON.stringify(persona);
console.log(personaString);
