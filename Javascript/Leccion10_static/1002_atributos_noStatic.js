/** A las clases se pueden agregar atributos "static"
 * así como "normales" o no estáticos.
 * Los atributos NO "static" se asocian con las instancias
 * no con la clase.
 * Los atributos NO "static" se heredan con normalidad.
 */

class Persona {

    // Atributo "static"
    static numPersonas = 0;
    // Atributo NO "static"
    email = 'email@defecto.es';

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        /** Para acceder al atributo "static" desde dentro de la clase,
         * también se debe referenciar mediante la clase */
        Persona.numPersonas++;
    }
    get nombre(){return this._nombre;}
    set nombre(nuevoNombre){ his._nombre = nuevoNombre;}
    get apellido(){return this._apellido;}
    set apellido(apellido){ this._apellido = apellido;}
    get edad(){return this._edad;}
    set edad(edad){ this._edad = edad;}
    nombreCompleto(){ return this._nombre + ' ' + this._apellido; }
    toString(){return this.nombreCompleto();}
    // Métodos "static"
    static saludar(){ return 'Saludos desde método static'; }
    static saludar2(persona){ return 'Hola, soy ' + persona.nombre; }
}

let p1 = new Persona('Isra','Balboa',42);
// Acceso a atributo NO "static"
console.log(p1.email);
// Acceso a atributo "static"
console.log(Persona.numPersonas);
