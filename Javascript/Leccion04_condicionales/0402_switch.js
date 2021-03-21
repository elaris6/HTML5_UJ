/** SWITCH */

/** Las comparaciones de SWITCH se realizan con el comparador 
 * estricto "===", comparando valores y tipos.
*/

/** La senencia "break" no es obligatoria, pero en caso de 
 * no incluirse, se ejecutarán todas las sentencias desde
 * la primera que de un caso positivo.
*/

/** La cláusula default es opcional y se puede colocar como
 * primera o como última opción. */

let numeroMes = 2;

switch (numeroMes) {
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    default:
        console.log('Mes fuera de rango');
}

/** Opciones "case" agrupadas. */

let mes = 3;

switch (numeroMes) {
    case 1: case 2: case 3:
        console.log('Invierno');
        break;
    case 4: case 5: case 6:
        console.log('Primavera');
        break;
    case 7: case 8: case 9:
        console.log('Verano');
        break;
    case 10: case 11: case 12:
        console.log('Otoño');
        break;
    // La cláusula default es opcional.
    default:
        console.log('Mes fuera de rango');
}
