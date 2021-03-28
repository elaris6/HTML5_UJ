class Cliente extends Persona {

    static contadorClientes = 0;

    constructor(nombre, apellido, edad){
        super(nombre, apellido, edad);
        this._fechaRegistro = new Date();
        this._idCliente = ++Cliente.contadorClientes;
    }
    get getIdCliente (){return this._idCliente;}
    get getFechaRegistro (){return this._fechaRegistro;}
    toString(){return `${super.toString()}\n${this._idCliente}\n${this._fechaRegistro}`;}
}