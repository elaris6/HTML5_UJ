/** PROMESAS */
/** https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 
 * El objeto Promise (Promesa) es usado para computaciones asíncronas.
 * Una promesa representa un valor que puede estar disponible ahora, 
 * en el futuro, o nunca.
 */

//Sintaxis básica
let promesa1 = new Promise((resolver, rechazar) => {
    let num = Math.round(Math.random() + 1);
    if (num % 2 === 0) {
        resolver('Resolución correcta 1');
    }
    else {
        rechazar('Resolución incorrecta 1');
    }
});

promesa1.then(
    mensajeOK => console.log(mensajeOK),
    mensajeKO => console.log(mensajeKO)
);

// Sintaxis con "catch"
let promesa2 = new Promise((resolver, rechazar) => {
    let num = Math.round(Math.random() + 1);
    if (num % 2 === 0) {
        resolver('Resolución correcta 2');
    }
    else {
        rechazar('Resolución incorrecta 2');
    }
    
});

// Formateo habitual para esta sintaxis:
promesa2
    .then(mensajeOK => console.log(mensajeOK))
    .catch(mensajeKO => console.log(mensajeKO))
    // "finally" es opcional y se ejecuta siempre
    .finally(() => console.log('Promesa finalizada 2.'));