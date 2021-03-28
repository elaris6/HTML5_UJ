/** CONSTANTES DE CLASE */
/** En Javascript no se pueden definir constantes de clase
 * simplemente creando un atributo de tipo "const". En su lugar
 * se deberá crear un método "static" que solo permitirá leer
 * un atributo, sin posibilidad de que sea modificado.
 */

class Persona {

    // Atributo "static"
    static numPersonas = 0;
    // Atributo NO "static"
    email = 'email@defecto.es';

    /** Ejemplo de método "static" que simula una constante de clase. */
    static get MAX_PERSONAS(){return 10;}

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        /** Para acceder al atributo "static" desde dentro de la clase,
         * también se debe referenciar mediante la clase */
        if (Persona.numPersonas < Persona.MAX_PERSONAS){
            this._idPersona = ++Persona.numPersonas;
        }
        else {
            // Aquí debería ir una excepción.
            console.log("Se han superado el máximo de personas permitidas.");
        }
        
    }
    get nombre(){return this._nombre;}
    set nombre(nuevoNombre){ his._nombre = nuevoNombre;}
    get apellido(){return this._apellido;}
    set apellido(apellido){ this._apellido = apellido;}
    get edad(){return this._edad;}
    set edad(edad){ this._edad = edad;}
    nombreCompleto(){ return this._nombre + ' ' + this._apellido; }
    toString(){return this._idPersona+': '+this.nombreCompleto();}
    // Métodos "static"
    static saludar(){ return 'Saludos desde método static'; }
    static saludar2(persona){ return 'Hola, soy ' + persona.nombre; }
}

let p1 = new Persona('Isra','Balboa',42);
console.log(p1.toString());

// Llamamos al método de "constante de clase"
console.log(Persona.MAX_PERSONAS);
/** No se puede modificar, si lo intentamos, realmente estaríamos creando
un nuevo atributo. */
Persona.MAX_PERSONAS = 15;
