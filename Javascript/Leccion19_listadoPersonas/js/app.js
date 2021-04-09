/** Creación de array de personas y funciones requeridas para su manejo. */

const personas = [];

function mostrarPersonas() {
    let listadoPersonas = '';
    for (let persona of personas) {
        listadoPersonas += `<li>${persona.toString()}</li>`
    }
    document.getElementById('personas').innerHTML = listadoPersonas;
}

function agregarPersona() {

    const formulario = document.forms['forma'];
    const nombre = formulario['nombre'].value;
    const apellido = formulario['apellido'].value;
    if (nombre != '' && apellido != '') {
        const persona = new Persona(nombre, apellido);
        personas.push(persona);
        mostrarPersonas();
        formulario['nombre'].value = '';
        formulario['apellido'].value = '';
    } else {
        console.log('Los campos de entrada están vacíos!');
    }

}