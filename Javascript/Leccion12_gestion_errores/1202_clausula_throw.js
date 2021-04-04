/** Lanzar errores manualmente mediante cláusula "throw" */

let resultado = 6;


try {
    if (isNaN(resultado)){
        throw 'No es un número';
    }
    else if (resultado === '') {
        throw 'Es cadena vacía';
    }
    else if (resultado < 0){
        throw 'Valor negativo';
    }
    else if (resultado > 0){
        throw 'Valor positivo';
    }

} catch (e) {
    /** Al ser un error personal no definido completamente,
     * no se muestra ni "name", ni "message".
     */
    console.log(e);
    console.log(e.name);
    console.log(e.message);

} finally {
    console.log('Código finally gestión errores');
}

console.log('El programa terminó correctamente');