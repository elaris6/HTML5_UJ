class Persona {

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }
    get getIdPersona() { return this._idPersona; }
    get getNombre() { return this._nombre; }
    set setNombre(nuevoNombre) { his._nombre = nuevoNombre; }
    get getApellido() { return this._apellido; }
    set setApellido(apellido) { this._apellido = apellido; }
    get getEdad() { return this._edad; }
    set setEdad(edad) { this._edad = edad; }
    toString() { return `${this._idPersona}\n${this._nombre}\n${this._apellido}\n${this._edad}`; }
}

class Empleado extends Persona {

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleados;

    }
    get getIdEmpleado() { return this._idEmpleado; }
    get getSueldo() { return this._sueldo; }
    set setSueldo(sueldo) { this._sueldo = sueldo; }
    toString() { return `${super.toString()}\n${this._idEmpleado}\n${this._sueldo}`; }
}

class Cliente extends Persona {

    static contadorClientes = 0;

    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad);
        this._fechaRegistro = new Date();
        this._idCliente = ++Cliente.contadorClientes;
    }
    get getIdCliente() { return this._idCliente; }
    get getFechaRegistro() { return this._fechaRegistro; }
    set setFechaRegistro(fecha) { this._fechaRegistro = fecha; }
    toString() { return `${super.toString()}\n${this._idCliente}\n${this._fechaRegistro}`; }
}


let p1 = new Persona('Isra', 'Balboa', 42);
console.log(p1.toString());

let e1 = new Empleado('Pepe', 'Pérez', 45, 1200);
console.log(e1.toString());
let e2 = new Empleado('Juan', 'Martínez', 38, 1500);
console.log(e2.toString());

let c1 = new Cliente('Ana', 'Sánchez', 37);
console.log(c1.toString());
c1.setFechaRegistro = new Date();
console.log(c1.toString());
let c2 = new Cliente('Laura', 'Gómez', 29);
console.log(c2.toString());