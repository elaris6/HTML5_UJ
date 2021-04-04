class Empleado extends Persona {

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleados;

    }
    get getIdEmpleado(){return this._idEmpleado;}
    get getSueldo(){return this._sueldo;}
    set setSueldo(sueldo){this._sueldo = sueldo;}
    toString(){return `${super.toString()}\n${this._idEmpleado}\n${this._sueldo}`;}
}