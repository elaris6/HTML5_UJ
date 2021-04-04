/** FUNCIONES FLECHA */
/** El HOISTING solo aplica a las funciones definidas de forma clásica.
 * Las funciones definidas como expresión o como flecha, no puenden
 * ser invocadas antes de su definición.
*/
/** Lo común cuando se trabaja con funciones como expresión o flecha,
 * es definir sus variables asociadas como "const", ya que lo habitual
 * será que una vez definidas, no se modifique esta relación.
*/

// Función clásica
function unaFuncion(){
    console.log('Saludos desde unaFuncion');
}
unaFuncion();

// Función como expresión
const otraFuncion = function(){
    console.log('Saludos desde otraFuncion');
};
otraFuncion();

// Función FLECHA
const funcionFlecha1 = () => {
    console.log('Saludos desde la función flecha 1');
    return 0;
}
funcionFlecha1();

// Si la función flecha solo lleva una línea en el bloque de código, podemos omitir las llavas
const funcionFlecha2 = () => console.log('Saludos desde la función flecha 2');
funcionFlecha2();

/** Si la función flecha solo retorna un valor, podemos omitir las llaves y el "return".
Además, si solo se recibe un parámetro, se pueden omitir los paréntesis. */
const funcionFlecha3 = nombre => "Saludos " + nombre + '!';
console.log(funcionFlecha3('Isra'));

/** Si se requiere más de un parámetro, los paréntesis para los mismos son necesarios. */
const funcionFlecha4 = (a, b) => a + b;
console.log('La suma es: ' + funcionFlecha4(3,2));

/** Si la función devuelve un objeto (tipo diccionario), se deberá rodear
 * de paréntesis, para no confundirlo con el cuerpo de la función. */
const funcionFlecha5 = valor => ({nombre: valor});
console.log(funcionFlecha5('Mari'));