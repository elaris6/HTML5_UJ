window.onload = cargarImagenes;

function cargarImagenes() {
    /** Se requiere cargar las imágenes del documento. Para ello
     * se recorren las imágenes del documetno con un bucle "for",
     * que tiene la misma sintaxis que en Java.
     * La propiedad "document.images" devuelve un array con las
     * imágenes del documento html, y podemos por tanto usar la
     * propiedad "length" sobre el array para el bucle "for".
     */
    for (var i = 0; i < document.images.length; i++) {

        /** Se comprueba si la imagen pertenece a una etiqueta html de
         * tipo "A", es decir un hipervínculo.
         */
        if (document.images[i].parentNode.tagName == "A") {

            configuraRollover(document.images[i]);
        }
    }
}

/** Se crea una función que recibirá como argumento una imagen. En JS no
 * es necesario declarar el tipo de la variable del argumento.
 */
function configuraRollover(imagen) {

    /** Sobre la imagen recibida como argumento se modifica la imagen mostrada
     * según los eventos de "onmouseout" y "onmouseover".
     */

    imagen.imagenOff = new Image();
    imagen.imagenOff.src = "boton_off.jpg";
    imagen.onmouseout = cambiaOff;

    imagen.imagenOn = new Image();
    imagen.imagenOn.src = "boton_on.jpg";
    imagen.onmouseover = cambiaOn;
}

/** Estas funciones se ejecutan según el eventos que se dispare, pero no al
 * cargar la página, dependen del botón que se presione. Son conocidos como
 * "handlers".
 */

function cambiaOff() {

    /**Se toman el valor ya asociado en la funcinón "configuraRollover", en
     * la propiedad "imagen.imagenOff".
     */
    this.src = this.imagenOff.src;
}

function cambiaOn() {

    /**Se toman el valor ya asociado en la funcinón "configuraRollover", en
     * la propiedad "imagen.imagenOn".
     */
    this.src = this.imagenOn.src;
}