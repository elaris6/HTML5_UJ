const mostrarReloj = () => {
    let fecha = new Date();
    let hours = formatoDigitos(fecha.getHours());
    let seconds = formatoDigitos(fecha.getSeconds());
    let minutes = formatoDigitos(fecha.getMinutes());
    document.getElementById('hora').innerHTML = `${hours}:${minutes}:${seconds}`;

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
    let diaSemana = dias[fecha.getDay()];
    let mes = meses[fecha.getMonth()];
    let anio = fecha.getFullYear();
    document.getElementById('fecha').innerHTML = `${diaSemana}, ${fecha.getDay()} ${mes} ${anio}`;

    /** La función "toggle(estilo)" agrega o quita un estilo. Lo que hacemos con esta llamada
     * es aplicar y quitar el estilo cada vez que se llama la función. En este caso cada segundo.
     */
    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoDigitos = (digitos) => {
    if (digitos < 10) {
        digitos = '0' + digitos;
    }
    return digitos;
}

setInterval(mostrarReloj, 1000);