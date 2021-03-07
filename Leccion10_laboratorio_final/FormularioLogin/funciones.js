/** Función para validar el formulario */

function validarForm(formulario){

    // Validar campo nombre
    var numeros = /^[0-9]$/;
    var nombre = formulario.nombre;
    if(nombre.value == "" || nombre.value.length < 2){
        errorCampo(nombre,"El campo 'Nombre' vacío o logintud insuficiente.")
        return false;
    }
    else {
        for (var i = 0; i < nombre.value.length; i++){
            if (nombre.value.charAt(i).match(numeros)) {
                errorCampo(nombre,"Campo 'Nombre' no puede contener números.");
                return false;
            }
        }
    }

    // Valida campo apellido
    var apellido = formulario.apellido;
    if (apellido.value == "" || apellido.value.length < 2) {
        errorCampo(apellido,"Campo 'Apellido' vacío o longitud insuficiente.");
        return false;
    }
    else {
        for (var i = 0; i < apellido.value.length; i++) {
            if (apellido.value.charAt(i).match(numeros)) {
                errorCampo(apellido, "El campo 'Apellido' no puede contener números.");
                return false;
            }
        }
    }

    // Valida campo email
    var email = formulario.email;
    if (email.value == "" || email.value.length < 6) {
        errorCampo(email,"Campo 'Email' vacío o logintud insuficiente.");
        return false;
    }
    else {
        var arrobas = 0;
        var puntos = 0;
        for (var i = 0; i < email.value.length; i++) {
            if (email.value.charAt(i) == "@"){
                arrobas++;
            }
            if (email.value.charAt(i) == ".") {
                puntos++;
            }
        }
        if (arrobas!=1 || puntos <1){
            errorCampo(email,"Formato 'Email' inválido. Revise formato.");
            return false;
        }

    }

    alert("Formulario validado!");
    return true;
}

function errorCampo(campo, mensaje) {
    alert(mensaje);
    campo.focus();
    campo.select();
}