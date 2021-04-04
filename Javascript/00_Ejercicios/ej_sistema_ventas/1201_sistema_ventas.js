class Producto {

    static contadorProd = 0;

    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProd;
    }

    get getIdProducto() { return this._idProducto; }
    get getNombre() { return this._nombre; }
    set setNombre(nombre) { this._nombre = nombre; }
    get getPrecio() { return this._precio; }
    set setPrecio(precio) { this._precio = precio; }
    toString() {
        return `${this._idProducto}/ ${this._nombre} : ${this._precio}€`;
    }
}

class Orden {

    static contadorOrden = 0;
    static get MAX_PRODUCTOS() { return 5; }

    constructor() {
        this._idOrden = ++Orden.contadorOrden;
        //this._productosOrden = 0;
        this._productos = [];
    }

    get getIdOrden() { return this._idOrden; }

    agregarProducto(Producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            //this._productos[this._productosOrden++] = Producto;
            this._productos.push(Producto);
        } else {
            console.log('No se pueden agregar más productos a la orden. Máximo alcanzado: ' + Orden.MAX_PRODUCTOS);
        }
    }
    calcularTotal() {
        let total = 0;
        for (let producto of this._productos) {
            total += producto.getPrecio;
        }
        console.log('El importe total de la orden es: ' + total + '€');
    }
    toString() {
        for (let producto of this._productos) {
            console.log(producto.toString());
        }
    }
}

// Prueba clase Producto
let p1 = new Producto();
p1.setNombre = 'pan';
p1.setPrecio = 0.55;
//console.log(p1.toString());
let p2 = new Producto('tomate', 0.80);
let p3 = new Producto('ajo', 0.35);

// Prueba clase Orden
let orden = new Orden();
orden.agregarProducto(p1);
orden.agregarProducto(p1);
orden.agregarProducto(p3);
orden.agregarProducto(p2);
console.log(orden.toString());
orden.agregarProducto(p2);
orden.calcularTotal();
orden.agregarProducto(p3);
orden.calcularTotal();
console.log(orden.toString());