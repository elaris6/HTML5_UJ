/** Concatenación de variables string */
var cad1 = 'cadena1';
var cad2 = 'cadena2';
var concat = cad1 + ' ' + cad2;
console.log(concat);
/** Concatenación de strings */
var concat2 = 'cadena3'+'cadena4';
console.log(concat2);
/** Las expresiones se evalúan de izquierda a derecha y al encontrar
 * una cadena, el número posterior lo trata como cadena.
 */
var x = cad1 + 6 + 4;
console.log(x);
x = cad1 + (6 + 4);
console.log(x);
/** Primero realiza la suma y luego la concatenación. */
var y = 6 + 4 + cad1;
console.log(y);