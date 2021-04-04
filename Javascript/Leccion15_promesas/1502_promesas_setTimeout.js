/** Ejemplo de promesa con tarea asíncrona mediante el uso
 * de la función "setTimeout".
 */

/** No es obligatorio gestionar la función callback del rechazo. */
let promesa = new Promise((resolver) => {
    console.log('Inicio promesa');
    setTimeout(() => resolver('Saludos con promesa y timeout'),3000);
    console.log('Fin promesa');
});

promesa.then(valor => console.log(valor));