/** Funciones SELF-INVOKING.
 * Se ejecutan a sí mismas en el momento de ser declaradas.
 * No pueden ser invocadas posteriormente al ser anónimas y no
 * estar asociadas a ninguna variable.
 */

/** No es muy común pero puede ser útil en algunos casos en
 * desarrollo web.
 */
(function(){
    console.log('Función self-invoking');
})();

// Ejemplo con argumentos.
(function(a, b){
    console.log(a + ' Función self-invoking con argumentos '+ b);
})(1,2);

