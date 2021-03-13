window.onload = configuraSelect;

function configuraSelect(){
    
    //Elemento seleccionado por defecto
    document.getElementById("selectFaq").selectedIndex = 0;

    // Se asigna una función al evento de cambio de elemento seleccionado
    document.getElementById("selectFaq").onchange = cambiaPagina;
}

function cambiaPagina(){

    /** Se recupera el elemento html "select" por si "id". */
    var elemSelect = document.getElementById("selectFaq");

    /** Se recupera la propiedad "value" de la opción seleccionada. Esta
     * propiedad tiene como valor una cadena que en realidad es el nombre
     * de una página, y asignamos el contenido de "value" a una variable.
     */
    var nuevaPagina = elemSelect.options[elemSelect.selectedIndex].value;

    /** Se comprueba que la variable no está vacía y en tal caso, se invoca
     * un cambio de página con el valor de la variable, que en realidad
     * será un nombre de página.
     */
    if (nuevaPagina != "") {
        window.location = nuevaPagina;
    }
}