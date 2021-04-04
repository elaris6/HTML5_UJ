/** FUNCIONES CALLBACKS */
/** Una función callback es una función usada dentro de otra,
 * que la recibió como parámetro.
 * El objetivo de estas funciones es ejecutar procesos de forma
 * asíncrona.
 */

// Funciones normales
function funcion1(){
    console.log('Código función 1');
}
function funcion2(){
    console.log('Código función 2');
}
/** Ejecución síncrona. La funcion2 no se ejecutará hasta que
 * no terine de ejecutarse la funcion1.
*/
funcion1();
funcion2();


/** Ejemplo uso de asincroniía con función callback usando la 
 * fununción setTimeout, que llama a una función callback pasado
 * un cierto tiempo indicado en milisegundos. */

/** Se observa que la ejecución no es síncrona, apareciendo
 * primero el mensaje de la última función.
 */


function funcionCallback(){
    console.log('Saludo asíncrono tras 3 segundos');
}
setTimeout(funcionCallback, 3000);

// Uso de función callback anónima
setTimeout(function(){console.log("Saludo asíncrono tras 4 segundos")}, 4000);
// Uso de función callback anónima tipo flecha
setTimeout(() => console.log("Saludo asíncrono tras 1 segundo"), 1000);

