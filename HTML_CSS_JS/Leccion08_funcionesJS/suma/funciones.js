function sumar(){
    /** Envolvemos todo el bloque de código en un "try catch"
     * del mismo modo que lo haríamos en Java, para prevenir
     * excepciones.
     */
    try {
        /** Pedimos un valor mediante la función integrada "prompt".
         * El primer parámetro es el mensaje a mostrar al usuario y
         * el segundo parámetro es el valor por defecto si el usuario
         * no proporciona ningún valor.
         */
        var a = prompt("Valor de a:","");
        /** Validamos el parámetro. Con el operador "!" podemos validar si
         * una variable es vacía o nula. Validamos también si no es un número
         * con la función "isNaN".
         */
        if (!a || isNaN(a)){
            /** En caso de valor inválido, lanzamos una excepción. */
            throw new Error("Valor invalido de a:" + a);
        }

        var b = prompt("Valor de b:", "");

        if (!b || isNaN(b)) {
            /** En caso de valor inválido, lanzamos una excepción. */
            throw new Error("Valor invalido de b:" + b);
        }

        /** Una vez comprobados que los valores son válidos, convertimos
         * las cadenas recibidas en números con la función integrada
         * "parseInt", pues en caso contrario, no sumaría, sino que
         * concatenaría.
         */

        var c = parseInt(a) + parseInt(b)
        alert("El resultado de la suma es "+c+"\n");
    }
    catch(e){
        /** En caso de producirse un error no controlado, lo recogemos con
         * el "catch" y mostramos.
         * En JS no es necesario definir el tipo de las variables, por lo que
         * el error se almacenará automáticamente en la variable "e".
         */
        alert("Se ha producido un error.\n"+e.message)
    }
}