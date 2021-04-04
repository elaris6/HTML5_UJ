/** ASYNC */
/** La palabra reservada "async" antes de la definición de 
 * un método, significa que ese método está obligado a devolver
 * una promesa.
 * Esto simplifica el uso de promesas al permitir el uso de la
 * función "then()" mediante una función clásica.
*/

async function miFuncionConPromesa() {
    return 'Saludos con promesa y async';
}

miFuncionConPromesa().then(valor => console.log(valor));
