/** FUNCIONES CALLBACKS */
/** Una función callback es una función usada dentro de otra,
 * que la recibió como parámetro.
 * El objetivo de estas funciones es ejecutar procesos de forma
 * asíncrona.
 */

//Función de tipo CALLBACK
function imprimir(mensaje){
    console.log(mensaje);
}

/** En este ejemplo la función "callback" es la función "imprimir",
 * pasada como argumento a la función sumar. La función del parámetro
 * no tiene porqué tener el mismo nombre que la función pasada.
 */
function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

/** Ya que las funciones son objetos en JS, se pueden pasar como
 * parámetros y no se deben poner los paréntesis, ya que se pasa
 * la función por referencia.
 */
sumar(5,3,imprimir);