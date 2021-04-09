// Clase hija para el tipo de dato ingreso
class Ingreso extends Dato {

    static contadorIngresos = 0;

    constructor(descripion, importe) {
        super(descripion, importe);
        this._id = ++Ingreso.contadorIngresos;
    }
    get getId() {
        return this._id;
    }
}