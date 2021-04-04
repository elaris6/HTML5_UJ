class DispositivoEntrada {

    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get getTipoEntrada() { return this._tipoEntrada; }
    get getMarca() { return this._marca; }
    set setTipoEntrada(tipoEntrada) { this._tipoEntrada = tipoEntrada; }
    set setMarca(marca) { this._marca = marca; }
}

class Teclado extends DispositivoEntrada {

    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    toString() {
        return `{Teclado -> id:${this._idTeclado}, Tipo Entrada:${this._tipoEntrada}, Marca:${this._marca}}`;
    }
}

class Raton extends DispositivoEntrada {

    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    toString() {
        return `{Ratón -> id:${this._idRaton}, Tipo Entrada:${this._tipoEntrada}, Marca:${this._marca}}`;
    }
}

class Monitor {

    static contadorMonitores = 0;

    constructor(marca, tamanio) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }
    get getIdMonitor() { return this._idMonitor; }
    get getMarca() { return this._marca; }
    get getTamanio() { return this._tamanio; }
    set setMarca(marca) { this._marca = marca; }
    set setTamanio(tamanio) { this._tamanio = tamanio; }
    toString() {
        return `{Monitor -> id:${this._idMonitor}, Marca:${this._marca}, Tamaño:${this._tamanio}}`;
    }
}

class Computadora {

    static contadorComputadoras = 0;

    constructor(nombre, Monitor, Teclado, Raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._monitor = Monitor;
        this._teclado = Teclado;
        this._raton = Raton;
    }
    get getIdComputadora() { return this._idComputadora; }
    get getIdMonitor() { return this._monitor; }
    get getTeclado() { return this._teclado; }
    get getRaton() { return this._raton; }
    set setMonitor(Monintor) { this._monitor = Monintor; }
    set setTeclado(Teclado) { this._teclado = Teclado; }
    set setRaton(Raton) { this._raton = Raton; }
    toString() {
        return `[Computadora -> id:${this._idComputadora}\n${this._monitor}\n${this._teclado}\n${this._raton}]`;
    }
}

class Orden {

    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get getIdOrden() { return this._idOrden; }
    agregarComputadora(Computadora) {
        this._computadoras.push(Computadora);
    }
    mostrarOrden() {
        console.log('Orden No:' + this._idOrden + ' Computadoras:' + this._computadoras.length);
        for (let computadora of this._computadoras) {
            console.log(computadora.toString());
        }
    }
}

/** Creando y probando las clases base */

let tec1 = new Teclado('USB', 'Razer');
let tec2 = new Teclado('Wireless', 'Ozone');
let tec3 = new Teclado('Bluetooth', 'HP');
//console.log(tec1.toString());

let rat1 = new Raton('USB', 'Razer');
let rat2 = new Raton('Wireless', 'Genius');
let rat3 = new Raton('Bluetooht', 'Corsair');
//console.log(rat1.toString());

let mon1 = new Monitor('Dell', '32');
let mon2 = new Monitor('Samsung', '34');
let mon3 = new Monitor('HP', '27');
//console.log(mon1.toString());

let comp1 = new Computadora('MyCompu1', mon1, tec1, rat1);
let comp2 = new Computadora('MyCompu1', mon2, tec2, rat2);
let comp3 = new Computadora('MyCompu1', mon3, tec3, rat3);
let comp4 = new Computadora('MyCompu1', mon1, tec2, rat3);
let comp5 = new Computadora('MyCompu1', mon3, tec2, rat1);
//console.log(comp1.toString());


/** Creando y probando la clase agregadora */

let orden1 = new Orden();
orden1.agregarComputadora(comp1);
orden1.agregarComputadora(comp1);
orden1.agregarComputadora(comp1);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.mostrarOrden();

let orden3 = new Orden();
orden3.agregarComputadora(comp5);
orden3.agregarComputadora(comp4);
orden3.agregarComputadora(comp3);
orden3.agregarComputadora(comp2);
orden3.agregarComputadora(comp1);
orden3.mostrarOrden();