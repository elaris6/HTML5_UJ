/** Arrays para contener los listados de ingresos y gastos del balance. */
const listaIngresos = [
    new Ingreso('Sueldo Mari', 1100.70),
    new Ingreso('Sueldo Isra', 1100.70),
    new Ingreso('Alquiler', 500)
];
const listaGastos = [
    new Gasto('Hipoteca', 800),
    new Gasto('Comida', 250.67),
    new Gasto('Seguro coche', 450.50),
    new Gasto('Facturas servicios', 340.18),
    new Gasto('Colegios', 115.25)
];

/**const listaIngresos = [];
const listaGastos = [];*/

/** Función principal que se llama en el body. */
let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarGastos();
}

/** Función que calcula el total de ingresos. */
let totalIngresos = () => {
    let total = 0;
    for (let ingreso of listaIngresos) {
        total += ingreso.getImporte;
    }
    //console.log('Total Ingresos: ' + total);
    return total;
}

/** Función que calcula el total de gastos. */
let totalGastos = () => {
    let total = 0;
    for (let gasto of listaGastos) {
        total += gasto.getImporte;
    }
    //console.log('Total Gastos: ' + total);
    return total;
}

/** Función que informa el cabecero HTML de balance con los cálculos necesarios */
let cargarCabecero = () => {

    let ingresos = totalIngresos();
    let gastos = totalGastos();
    let balance = ingresos - gastos;
    let porcentaje = gastos / ingresos;
    //console.log("Balance: " + balance);
    document.getElementById('balance').innerHTML = `${formatoMoneda(balance)}`;
    document.getElementById('ingresos').innerHTML = `${formatoMoneda(ingresos)}`;
    document.getElementById('gastos').innerHTML = `${formatoMoneda(gastos)}`;
    document.getElementById('porcentaje').innerHTML = `${formatoPorcentaje(porcentaje)}`;
}

/** Internacionalización
 * Se pueden usar funciones de formateo con API de Javascript.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
 */
const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-ES', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 });
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-ES', { style: 'percent', minimumFractionDigits: 2 });
}

/** Función que recorre los ingresos y carga los elementos HTML para crear
 * el bloque del listado de ingresos. */
const cargarIngresos = () => {
    let ingresosHTML = '';
    for (let ingreso of listaIngresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

/** Función que genera cada elemento HTML */
const crearIngresoHTML = (ingreso) => {
    return `<div class="elemento limpiarEstilos">
                <div class="elemento_descripcion">${ingreso.getDescripcion}</div>
                <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">+ ${formatoMoneda(ingreso.getImporte)}</div>
                    <div class="elemento_porcentaje_ingreso">${formatoPorcentaje(ingreso.getImporte/totalIngresos())}</div>
                    <div class="elemento_eliminar">
                        <button class="elemento_eliminar--btn">
                            <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso.getId})"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>`;
}

/** Función que recorre los gastos y carga los elementos HTML para crear
 * el bloque del listado de gastos. */
const cargarGastos = () => {
    let gastosHTML = '';
    for (let gasto of listaGastos) {
        gastosHTML += crearGastoHTML(gasto);
    }
    document.getElementById('lista-gastos').innerHTML = gastosHTML;
}

/** Función que genera cada elemento HTML */
const crearGastoHTML = (gasto) => {
    return `<div class="elemento limpiarEstilos">
                <div class="elemento_descripcion">${gasto.getDescripcion}</div>
                <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">- ${formatoMoneda(gasto.getImporte)}</div>
                    <div class="elemento_porcentaje_gasto">${formatoPorcentaje(gasto.getImporte/totalGastos())}</div>
                    <div class="elemento_eliminar">
                        <button class="elemento_eliminar--btn">
                            <ion-icon name="close-circle-outline" onclick="eliminarGasto(${gasto.getId})"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>`;
}

/** Función para eliminar un elemento de tipo ingreso en base al id del mismo. */
const eliminarIngreso = (id) => {
    /** "findIndex()" devolverá el índice en el que se cumple la condición de la función pasada. */
    let indice = listaIngresos.findIndex(ingreso => ingreso.getId === id);
    // Con "splice" eliminamos elementos consecutivos de un array desde un índice dado
    listaIngresos.splice(indice, 1);
    cargarIngresos();
    cargarCabecero();
}

/** Función para eliminar un elemento de tipo gasto en base al id del mismo. */
const eliminarGasto = (id) => {
    /** "findIndex()" devolverá el índice en el que se cumple la condición de la función pasada. */
    let indice = listaGastos.findIndex(gasto => gasto.getId === id);
    // Con "splice" eliminamos elementos consecutivos de un array desde un índice dado
    listaGastos.splice(indice, 1);
    cargarGastos();
    cargarCabecero();
}

/** Función para agregar elementos de tipo ingreso o gasto al array correspondiente. */
const agregarDato = () => {
    let formulario = document.forms['forma'];
    let tipo = formulario['tipo'].value;
    let desc = formulario['descripcion'].value;
    let importe = parseFloat(formulario['importe'].value);
    /**Incluir control de datos antes de insertar */
    if (desc.length < 4) {
        agregarAlerta('Descripción incorrecta');
        formulario['descripcion'].focus();
    }
    else if (isNaN(importe)) {
        agregarAlerta('Importe incorrecto');
        formulario['importe'].focus();
    }
    else {
        if (tipo == "ingreso") {
            /** Sintaxis simplificada para convertir un valor a number
             * agregando "+" delante de la variable.
             */
            listaIngresos.push(new Ingreso(desc, +importe));
        } else if ((tipo == "gasto")){
            listaGastos.push(new Gasto(desc, +importe));
        } else {
            agregarAlerta('Tipo de registro incorrecto');
            return;
        }
        borrarAlerta();
        cargarApp();
    }
}

/** Función para mostrar una alerta en  */
const agregarAlerta = (mensaje) => {
    let alerta = `
        <div class="agregar">
            <div class="agregar_contenedor">
                <div class="alert"> 
                    ${mensaje}<span class="closebtn" onclick="borrarAlerta();">&times;</span>
                </div>
            </div>
        </div>`;
    document.getElementById('alerta').innerHTML = alerta;
}

const borrarAlerta = () => {
    document.getElementById('alerta').innerHTML = '';
}