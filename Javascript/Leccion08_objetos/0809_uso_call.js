/** CALL
 * El método call permite llamar a un método que está definido
 * en un objeto, desde otro objeto.
 */

let persona1 = {
    nombre: 'Juan',
    apellido: 'Pérez',
    nombreCompleto: function(tratamiento = 'Sr'){
        return tratamiento + ' ' + this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Isra',
    apellido: 'Balboa',
}

// Uso de "call" para usar método "nombreCompleto"
console.log(persona1.nombreCompleto());

/** Al usar el método call, los datos que se van a usar sobre el
 * método, son los del objeto pasado como parámetro.
 * Si el método a llamar tuviese más argumentos, se podrán pasar
 * también al invocar mediante el método "call".
*/
console.log(persona1.nombreCompleto.call(persona2,'Mr'));