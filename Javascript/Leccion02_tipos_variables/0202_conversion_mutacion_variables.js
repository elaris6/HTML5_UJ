// CONVERSIÓN DE VARIABLES

var nombre, edad, sexo, trabaja;
nombre = 'Isra';
edad = 42;
sexo = 'M';
trabaja = true;
/** JS realiza conversiones automáticas de tipos en determinadas circunstancias,
 * como por ejemplo al incluir variables no String dentro de una cadena.
 */
console.log(nombre + ' tiene ' + edad + ' años, su sexo es ' + sexo + ' y está trabajando? ' + trabaja);

// MUTACIÓN DE VARIABLES

/** JS usa un tipado dinámico, y esto permite convertir en tiempo de ejecución
 * variables que fueron inicializadas con un tipo, a otro diferente.
 */
edad = 'cuarenta y dos';
console.log(edad);