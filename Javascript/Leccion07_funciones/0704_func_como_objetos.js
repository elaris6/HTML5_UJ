/** Funciones como objetos.
 * En JS las funciones son un tipo de dato, pero también
 * se pueden describir como objetos y por lo tanto tener
 * propiedades y métodos.
 */

function miFuncion(a, b) {
    /** Propiedad "arguments.length" que devuelve el número de argumentos.
     * Solo se puede usar dentro de la función.
     */
    console.log(arguments.length);
    return a * b;
}

/** Método "toString()" sobre una función. */
let miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);