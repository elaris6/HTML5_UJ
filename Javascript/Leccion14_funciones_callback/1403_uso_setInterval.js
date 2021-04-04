/** Ejemplo uso función callback para un proceso asíncrono.
 * Llamadas asíncronas con uso de la función setTimeout, en
 * las que se observa que la ejecución no es síncrona, apareciendo
 * primero el mensaje de la última función.
 */

/** Ejemplo de asincronía usando la función "setInterval", que llama
 * a la función callback cada cierto tiempo.
 */

let reloj = () => {
    let fecha = new Date();
    console.log(`Hora actual > ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

// Llamada a la función callback "reloj" cada X milisegundos
setInterval(reloj,2000);