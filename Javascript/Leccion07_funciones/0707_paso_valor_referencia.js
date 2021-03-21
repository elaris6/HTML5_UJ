/** PASO POR VALOR Y PASO POR REFERENCIA */

/** VALOR. Se da cuando usamos tipos primitivos, que no son objetos.
 * Cuando se pasa un tipo primitivo lo que se envía es una copia
 * del valor que contiene, pero no la referencia de memoria.
 * Por ello, cualquier modificación interna, no afecta a la variable
 * externa.
 */

let x = 10;

function cambiarValor(a){
    // la variable "a" se crea y se destruye dentro del contexto de la función
    a *= 2;
}

// No estamos modificando la variable "x" dentro de la función
cambiarValor(x);
console.log(x);

/** REFERENCIA. Cuando se envía un objeto a una función, lo que se envía es
 * es la referencia de memoria del objeto, por lo que cualquier modficiación
 * realizada, estará realmente modificando el objeto origen.
*/

// Creamos un objeto sencillo
const persona = {
    nombre: 'Isra',
    apellido: 'Balboa'
}

function cambiarValorObjeto(p1){
    // la variable "p1" se crea y se destruye dentro del contexto de la función
    p1.nombre = 'Rubén';
}

// Realmente se está modificando el objeto "persona" dentro de la función
cambiarValorObjeto(persona);
console.log(persona);
