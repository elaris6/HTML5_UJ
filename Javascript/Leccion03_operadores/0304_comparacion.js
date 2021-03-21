/** COMPARACION (>, <, >=, <=, ==, ===, !=, !==)
 * 
*/

let num1 = 4, num2 =3;

console.log('\nOperadores lógicos.')
/** Comparación */
console.log("Es mayor num1? " + (num1 > num2));
console.log("Es menor num1? " + (num1 < num2));
/** Los operadores "==" y "!=" solo comparan los valores */
console.log("Son iguales num1 y num2? " + (num1 == '4'));
console.log("Son distintos num1 y num2? " + (num1 != '4'));
/** Los operadores "===" y "!==" revisan tanto el valor como el tipo de lo comparado. */
console.log("Son iguales num1 y num2? " + (num1 === '4'));
console.log("Son diferentes num1 y num2? " + (num1 !== '4'));
