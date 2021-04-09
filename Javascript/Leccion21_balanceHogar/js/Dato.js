// Clase padre de los datos
class Dato {

    constructor(descripcion, importe) {
        this._descripcion = descripcion;
        this._importe = importe;
    }
    get getDescripcion() {
        return this._descripcion;
    }
    get getImporte() {
        return this._importe;
    }
    set setDescripcion(desc) {
        this._descripcion = desc;
    }
    set setImporte(importe) {
        this._importe = importe;
    }
}