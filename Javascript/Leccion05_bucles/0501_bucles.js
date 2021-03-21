/** WHILE */
console.log('Bucle WHILE');
let j = 0;
while (j < 5) {
    console.log(j++);
}

/** DO WHILE */
// El bloque de instrucciones se ejecutará al menos la primera iteración
console.log('Bucle DO WHILE');
let k = 5;
do {
    console.log(k++);
} while (k < 5);

/** FOR */
console.log('Bucle FOR');
for (let i = 0; i < 5; i++) {
    console.log(i);
}

/** BREAK
 * Se puede usar la palabra reservada "break", para
 * detener la ejecución del bucle en un momento deseado.
 * Esto aplica tanto a WHILE como a FOR.
*/

for (let i=0; i < 5; i++) {
    if(i % 2 == 0) {
        console.log('Encontrato el primer número par '+i);
        break;
    }
    else console.log(i);
}

/** CONTINUE
 * Detiene la iteración actual del bucle, e inicia
 * la siguiente iteración.
 * Se puede aplicar tanto a WHILE como a FOR.
*/
for (let i=0; i < 5; i++) {
    if(i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

/** LABELS. NO SON RECOMENDADAS
 * Se usan las etiquetas o labels para llevar el flujo
 * a un punto concreto en conjunto con las palabras
 * reservadas "continue" y "break".
 */

label1:
for (let i=0; i < 5; i++) {
    if(i % 2 !== 0) {
        continue label1;
    }
    console.log(i);
}
/** "break" con la etiqueta lleva el flujo al final del
 * bucle. */
label2:
for (let i=0; i < 5; i++) {
    if(i % 2 !== 0) {
        break label2;
    }
    console.log(i);
}
