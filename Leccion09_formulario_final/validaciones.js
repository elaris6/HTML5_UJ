/** Validaciones sobre un formulario recibido. */

function validarForm(formulario){

    // Validar usuario. Se hace referencia al elemento formulario recibido,
    // y desde él, mediante la nomenclatura del punto, a cualquiera de sus
    // elementos hijos mediante su propiedad "name".
    var usuario = formulario.usuario;
    if(usuario.value == ""){
        /** En caso de estar vacío, se muestra una alerta y se posiciona el foco
         * en el campo donde se ha detectado el problema.
         */
        alert("Es necesario proporcionar el usuario.");
        usuario.focus();
        // Con la función "select" se pone el cursor en el elemento.
        usuario.select();
        return false;
    }

    // Validar password
    var password = formulario.password;
    if (password.value == "" || password.value.length < 5) {
        // Foco en el campo
        alert("Es necesario proporcionar una contraseña al menos de 5 caracteres.");
        password.focus();
        // Con la función "select" se pone el cursor en el elemento.
        password.select();
        return false;
    }

    // Validamos los checkbox
    var tecnologia = formulario.tecnologia;
    var checkSel = false;

    // Se recorre el posible array de casillas marcadas.
    for(var i = 0; i < tecnologia.length; i++){
        if(tecnologia[i].checked){
            checkSel = true;
        }
    }
    if (!checkSel){
        alert("Es necesario proporcionar al menos una tecnología.")
        return false;
    }

    // Validamos los radio button
    var genero = formulario.genero;
    var radioSel = false;

    for(var i = 0; i < genero.length; i++){
        if(genero[i].checked){
            radioSel = true;
        }
    }
    if(!radioSel){
        alert("Es necesario proporcionar un género");
        return false;
    }


    // Validamos el desplegable select
    var ocupa = formulario.ocupacion;
    if(!ocupa.value){
        alert("Es necesario proporcionar una ocupación");
        return false;
    }

    // Si se llega a este punto, se puede considerar que el formulario es válido.
    alert("Formulario validado!")
    return true;
}