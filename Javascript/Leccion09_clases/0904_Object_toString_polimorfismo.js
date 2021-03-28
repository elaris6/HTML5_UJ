/** TOSTRING en JS */
/** Al igual que en Java, todas las clases heredan de forma implícita
 * de la clase "Object", lo que permite usar los métodos de esta clase.
 * Es una buena práctica sobreescribir el método "toString", pues será
 * el llamado por un navegador al recuperar un objeto de clase para
 * imprimirlo.
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
    toString(){return this.nombreCompleto();}
}

class Empleado extends Persona {
    constructor(nombre, apellido, edad, sueldo, departamento){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._departamento = departamento;
    }
    get sueldo(){return this._sueldo;}
    set sueldo(sueldo){this._sueldo = sueldo;}
    get departamento(){return this._departamento;}
    set departamento(departamento){ this._departamento = departamento;}
    nombreCompleto(){
        return super.nombreCompleto() + ' ' + this._departamento;
    }
}

/** Si no se ha sobreescrito, "toString", el método de la clase "Object"
 * devolverá [object object].
 */ 

/** Se invoca el método "toString" para cada objeto, aplicando "polimorfismo",
 * pues el método tomará el comportamiento definido según el tipo de objeto
 * que lo invoque.
 */
let p1 = new Persona('Isra','Balboa',42);
console.log(p1.toString());

let e1 = new Empleado('Pepe','Pérez', 45, 1200, 'Administrción');
console.log(e1.toString());


