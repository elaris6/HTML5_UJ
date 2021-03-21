/** Estructura IF, ELSE */

let condicion = false;

if (condicion) {
    console.log('Esto se ejecuta si la condicion es verdadera');
}
else {
    console.log('Esto se ejecuta si la condicion es falsa');
}

/** Al igual que en Java, si el "if" o el "else" solo
 * tiene una línea, no es necesario indicar las llaves
 * aunque como buena práctica, se deben incluir siempre.
*/

condicion = true;
if (condicion) console.log('La condición es verdadera');
else console.log('La condición es falsa');

/** Estructura IF, ELSE IF, ELSE */

let numero = 3;

if (numero == 1){
    console.log('Número 1!');
}
else if (numero == 2){
    console.log('Número 2!');
}
else if (numero == 3){
    console.log('Número 3!');
}
else {
    console.log('Número fuera de rango!')
}