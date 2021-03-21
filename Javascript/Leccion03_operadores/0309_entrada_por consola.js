/** ENTRADA POR CONSOLA NODEJS */
// https://www.codecademy.com/articles/getting-user-input-in-node-js

const prompt = require('prompt-sync')();

let nombre = prompt('Introduce tu nombre: ');

console.log('Hola ' + nombre);