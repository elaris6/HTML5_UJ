// Clase hija para el tipo de dato gasto
class Gasto extends Dato {

    static contadorGastos = 0;

    constructor(descripion, importe) {
        super(descripion, importe);
        this._id = ++Gasto.contadorGastos;
    }
    get getId() {
        return this.id;
    }
}