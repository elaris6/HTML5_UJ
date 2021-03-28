class Persona {

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }
    get getIdPersona(){return this._idPersona;}
    get getNombre(){return this._nombre;}
    set setNombre(nuevoNombre){ his._nombre = nuevoNombre;}
    get getApellido(){return this._apellido;}
    set setApellido(apellido){ this._apellido = apellido;}
    get getEdad(){return this._edad;}
    set setEdad(edad){ this._edad = edad;}
    toString(){return `${this._idPersona}\n${this._nombre}\n${this._apellido}\n${this._edad}`;}
}