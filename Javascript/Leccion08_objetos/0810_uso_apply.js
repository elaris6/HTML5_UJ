/** APPLY
 * De manera similar a "call", "apply" también permite invocar
 * un método desde un objeto que no lo tiene definido.
 * "apply" y "call" funcionan exactamente igual en caso de que
 * el método a invocar no tenga parámetros.
 * Si hay parámetros, en el caso de "apply" deben enviarse como
 * un Array.
 */

let persona1 = {
    nombre: 'Juan',
    apellido: 'Pérez',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    },
    edad: function(min,max){
        return (Math.random() * (max - min) + min).toFixed(0);
    }
}

let persona2 = {
    nombre: 'Isra',
    apellido: 'Balboa',
}

console.log(persona1.nombreCompleto());

// Uso de "apply" sin argumentos
console.log(persona1.nombreCompleto.apply(persona2));

/** El uso de "apply" con argumentos requiere pasar los valores
 * de los argumentos como un Array.
*/
// Uso de "apply"
console.log(persona1.edad.apply(persona2,[1,99]));

// Uso de "call"
console.log(persona1.edad.call(persona2,1,99));
