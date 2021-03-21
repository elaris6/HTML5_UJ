/** Los operadores aritméticos son los siguientes:
 * +, -, *, **(exponente ES2016), /, % (módulo), ++, -- 
 * 
*/

let a = 7, b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a ** b);
console.log(a / b);
console.log(a % b);
/** Post-incremento/decremento. Primero se lee el valor y se deja pendiente
 * la modificación para la siguiente lectura de la variable.
 */
console.log(a++);
console.log(a--);
/** Pre-incremento/decremento. Primero se aplica la modificación y luego
 * se lee el nuevo valor de la variable.
 */
console.log(++b);
console.log(--b);