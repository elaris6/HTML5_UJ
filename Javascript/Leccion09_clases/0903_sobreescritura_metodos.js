/** SOBREESCRITURA DE MÉTODOS */

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
        /** Sobreescritura de un método y además llamando a un método
         * de la clase padre con la función especial "super".
         */
        return super.nombreCompleto() + ' ' + this._departamento;
    }
}

let p1 = new Persona('Isra','Balboa',42);
console.log(p1.nombreCompleto());

let e1 = new Empleado('Pepe','Pérez', 45, 1200, 'Administrción');
console.log(e1.nombreCompleto());