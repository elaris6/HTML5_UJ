/** Comentario para varias líneas */

// Comentario para una sola línea

// Creación de una función simple que invoca a su vez a la función "alert".
function saluda() {
    alert("Hola Mundo!");
}

/** Creación de una función que inserta código HTML en un elemento.
 * Recuperamos el elemento que vamos a modificar mediate el "id" indicado en la página HTML,
 * e insertamos lo que se desee en el elemento. En este caso solo estamos insertando texto
 * en un "h1", pero se podría insertar código HTML.
 */
function escribeMensaje() {
    document.getElementById("mensajeHtml").innerHTML = "Texto insertado en H1 desde JavaScript!";
}