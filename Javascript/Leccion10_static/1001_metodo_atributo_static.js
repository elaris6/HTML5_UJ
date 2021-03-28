/** STATIC */
/** Métodos o Atributos que se asocien con una clase exclusivamente, pero
 * no con las instancias de esa clase.
 * Los métodos y atributos "static" son heredados. */

class Persona {

    // Atributo "static"
    static numPersonas = 0;

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

class Empleado extends Persona {
    constructor(nombre, apellido, edad, sueldo, departamento){
        // Se llama al constructor de la clase padre
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

let p1 = new Persona('Isra','Balboa',42);
let p2 = new Persona('Mari','Cuesta',40);
let e1 = new Empleado('Pepe','Pérez', 45, 'Administrción');

/** METODOS. No es posible usar un método "static" desde un objeto, se 
 * debe llamar desde la propia clase directamente.
 */
// console.log(p1.saludar());
console.log(Persona.saludar());
/** Si se puede encambio pasar argumentos a un método "static". */
console.log(Persona.saludar2(p1));

/** ATRIBUTOS. Al igual que para los métodos, no se pueden usar los
 * atributos "static" sobre objetos, solo sobre la clase directamente.
 */

/** Acceso al atributo "static".
 * MUY IMPORTANTE. Al llamarse al constructor de la clase padre,
 * al instanciar un objeto de la clase hija, en este ejemplo también
 * se incrementará el contador.
 */
//console.log(e1.numPersonas); Estaríamos creando un atributo normal de clase
console.log(Persona.numPersonas);
console.log(Empleado.numPersonas);

