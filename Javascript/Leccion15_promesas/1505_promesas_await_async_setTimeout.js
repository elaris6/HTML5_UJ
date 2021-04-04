/** Ejemplo de uso de "async" y "await" junto con la función
 * "setTimeout".
 */

async function funcionConPromesaAwaitTimeout(){
    console.log('Inicio función.');
    let promesa = new Promise (resolver => {
        setTimeout(() => resolver('Texto a imprimmir desde promesa con await y timeout'), 3000);
    });
    console.log(await promesa);
    /** La función no continúa hasta que "await" recibe la respuesta
     * de la promesa.
     */
    console.log('Inicio función.');
}

funcionConPromesaAwaitTimeout();
