/** EJEMPLO SOBREESCRITURA DE MËTODO DE CLASE */

class Empleado {

    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado {

    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    // Sobreescribe al método de la clase padre
    obtenerDetalles() {
        // Se puede acceder al método sobreescrito mediante el modificador "super"
        return `Gerente: ${super.obtenerDetalles()}, departamento: ${this._departamento}`;
    }
}

let e1 = new Empleado('Pepe Pérez',1200);
let g1 = new Gerente('Ana López', 1900, 'Análisis');

/** EJEMPLO DE POLIMORFISMO */

function imprimir(objeto){
    /** Aqui se produce el POLIMORFISMO, ya que la función se comporta
     * de forma diferente según el tipo del objeto recibido. */
    console.log(objeto.obtenerDetalles());

    /** Para determinar el tipo de objeto que estamos tratando se debe
     * usar el operador "instanceof", preguntando por la Clase de objeto
     * deseado. Si hay relaciones de herencia, se debe preguntar en orden
     * desde los hijos a los padres, ya que si no, los hijos darían "true"
     * para las clases padre. */
    if(objeto instanceof Gerente) console.log("Se uso un objeto de clase Gerente");
    else if (objeto instanceof Empleado) console.log("Se uso un objeto de clase Empleado");

}

imprimir(e1);
imprimir(g1);