/** CONVERSION DE STRING A NUMBER. Función "Number" */

let numero = "10";

console.log(numero);
console.log(typeof numero);

console.log(Number(numero));
console.log(typeof Number(numero));

/** Se pueden hacer comparaciones entre String y Number,
 * pero los resultados podrían ser erróneos.
 * Lo correcto es realizar la conversión a number para 
 * prevenir errores no esperados. */
numero >= 18 ? console.log("Es mayor de edad") : console.log("Es menor de edad");

Number(numero) >= 18 ? console.log("Es mayor de edad") : console.log("Es menor de edad");


/** COMPROBACION SI VALOR ES NUMERO. Función "isNaN" */

let valor = "18x";
/** En este caso está realizando la comparación, incluso 
 * con un valor incorrecto. */
valor >= 18 ? console.log(valor+" Es mayor de edad") : console.log(valor+" Es menor de edad");

/** Incluso la función "Number" no devuelve error. */
Number(valor) >= 18 ? console.log(valor+" Es mayor de edad") : console.log(valor+ " Es menor de edad");

/** En estos casos, lo correcto es realizar la comprobación
 * sobre si un valor es numérico, antes de realizar la conversión.
 */

isNaN(valor) == true ? console.log(valor+" No es un número") : console.log(valor+" Si es un número");

let edad = "21";

if (isNaN(edad)){
    console.log("El valor no es numérico.");
}
else {
    Number(edad) >= 18 ? console.log("Es mayor de edad") : console.log("Es menor de edad");
}
