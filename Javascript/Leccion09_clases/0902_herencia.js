/** HERENCIA en JS */
/** En Javascript se permite la herencia de clases de forma similar
 * a como funciona en Java.
 * Al igual que en Java, todas las clases heredan de forma implícita
 * de la clase "Object".
*/

class Persona {
    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get nombre(){return this._nombre;}
    set nombre(nuevoNombre){ his._nombre = nuevoNombre;}
    get apellido(){return this._apellido;}
    set apellido(apellido){ this._apellido = apellido;}
    get edad(){return this._edad;}
    set edad(edad){ this._edad = edad;}
    nombreCompleto(){ return this._nombre + ' ' + this._apellido; }
}

/** La herencia se define con la palabra reservada "extends" igual
 * que en Java.
*/

class Empleado extends Persona {
    constructor(nombre, apellido, edad, sueldo, departamento){
        /** Es obligatorio llamar al constructor de la clase padre
         * en la primera línea del constructor de la clase hija
         * mediante la función especial "super".
         */
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._departamento = departamento;
    }
    get sueldo(){return this._sueldo;}
    set sueldo(sueldo){this._sueldo = sueldo;}
    get departamento(){return this._departamento;}
    set departamento(departamento){ this._departamento = departamento;}
}

let p1 = new Persona('Isra','Balboa',42);
console.log(p1);

let e1 = new Empleado('Pepe','Pérez',40,1200,'Administrción');
console.log(e1);

/** Todos los métodos definidos en la clase padre se heredan. */
console.log(e1.edad);
/** En caso de no ser un método "get" o "set", será necesario el uso de
 *  paréntesis aunque no tenga argumentos. */
console.log(e1.nombreCompleto());

