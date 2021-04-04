/** AWAIT */
/** La palabra reservada "await" lo que hace es esperar el
 * resultado de una promesa, junto con la palabra reservada
 * "async", facilita aún más el uso de promesas, eliminando
 * la necesidad de usar la función "then()".
 */

// Ejemplo de función "async" con "await"
async function funconConPromesaYAwait(){
    let promesa = new Promise( resolver => {
        resolver('Texto impreso en promesa con await');
    });

    /** "await" solo se puede usar dentro de una función declarada
    * con "async" */
    console.log(await promesa);
}

funconConPromesaYAwait();