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