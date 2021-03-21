/** GET y SET en objetos */

/** Aun que se pueden definir métodos de objetos asignando
 * funciones a propiedades, la mejor práctica es el uso de
 * la palabra reservada "get", que hará el trabajo de especificar
 * que esa propiedad es un método.
 */

// SINTAXIS GET

let persona = {
    nombre: 'Isra',
    apellido: 'Balboa',
    edad: 42,
    casado: true,
    hijos: 2,
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    },
    get aniosParaJubilarse(){
        return 65 - this.edad;
    }
}

// En este caso ya no será necesario indicar los paréntesis al llamar al método
console.log(persona.aniosParaJubilarse);

// SINTAXIS SET

let aplicacion = {
    nombre: 'Superapp',
    lenguaje: 'Javascript',
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    }
}

console.log(aplicacion.lang);
/** Para usar un método SET no es necesario usarlo como una función, simplemente
 * se usa como si se llamase una propiedad.
 */
aplicacion.lang = 'us';
console.log(aplicacion.lang);
console.log(aplicacion.idioma);


