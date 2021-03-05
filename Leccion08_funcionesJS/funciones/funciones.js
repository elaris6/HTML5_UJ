/** Además de incluir el atributo "onload" en un elemento html, también podemos
 * incluir esta funcionalidad en el fichero JS.
 * Para ello se debe llamar al atributo "onload" del elemento "window" y especificar
 * las funciones a ejecutar durante la carga.
 */
window.onload = iniciaDatos;

// Función inicial que se ejecuta durante la carga de la página
function iniciaDatos() {
    /** Dentro de la función que se ejecuta al cargarse el script, se pueden asociar
     * funciones a los elementos de la página.
     * En el ejemplo se asocian funciones al click sobre los hipervínculos de la página.
     */

    document.getElementById("link_google").onclick = validaSalir;

    document.getElementById("link_google_search").onclick = busqueda;

    document.getElementById("titulo").onclick = validaSalir;

    document.getElementById("pagina").onclick = unClick;
}

// Función que levanta un alert si se hace click en cualquier lugar de la página
function unClick() {

    alert("Has hecho un click en cualquier lugar")
}


// Función para validar si el usuario quiere salir del sitio o no.
function validaSalir() {

    /** La función integrada "confirm" levanta una ventana de confirmación con los botones
     * de aceptar o cancelar que devolverán "true" o "false" como retorno de dicha función
     * en función de lo que pulse el usuario.
     */

    if (confirm("Desea salir del sitio?")) {
        // La función integrada "alert" levanta un mensaje de alerta al usuario.
        alert("Nos vamos a Google");
        return true; // se devuelve "true" para ejecutar la acción (en este caso el hipervínculo).
    } else {
        alert("Permanecemos en la página");
        return false; // se devuelve "false" para no ejecutar la acción.
    }
}

// Función
function busqueda() {

    /** La función integrada "prompt" permite solicitar introducción de datos al usuario y
     * almacenarlos en una variable.
     * Las variables en JS se pueden definir variables con el tipo genérico "var" y tomarán
     * el tipo de dato oportuno, según el valor que se le asigne.
     */
    var respuesta = prompt("Escribe la cadena a buscar: ", "");
    /** Si ha respuesta se concatena la cadena a buscar al link de Google */
    if (respuesta) {
        /** El opreador "this" sirve para referenciar el elemento que provoca el evento, en
         * este caso el elemento con el identificador "link_google_search", y concatenar la
         * respuesta como un parámetro de una petición GET.
         */
        var nuevoLink = this + "search?q=" + respuesta;
        alert("Nuevo link: " + nuevoLink);
        // Con la llamada "windows.location", se redirige el link
        window.location = nuevoLink;
        // Se devuevle "false" para no ejecutar el link que accionó el evento
        return false;
    } else {
        alert("No se ha introducido nuinguna cadena a buscar");
        /** Se devuelve "false" para que no se cierre la interacción y se ejecute el link
         * original.
         * */
        return false;
    }

}