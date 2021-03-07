/** En la carga de la página */
window.onload = listaUsuarios;
var usuarios = [];
var indice = 0;

/** ESTO NO FUNION DE MANERA CORRECTA */
function detectaEnter(elemento){
    
    elemento.addEventListener("keypress", function(e){
        if (e.key === 'Enter' || e.keyCode === 13) {
            if (elemento.id == "usuario"){
                //ENTRA VARIAS VECES AQUI. ¿POR QUÉ?
                altaUsuario(elemento);
            }
            else if (elemento.id == "buscar"){
                buscarUsuario(elemento);
            }
            
        }
    })
}

function altaUsuario(elemento) {
    usuarios[indice++] = elemento.value;
    listaUsuarios();
    elemento.value = "";
}

function listaUsuarios() {
    document.getElementById("lista").innerHTML = "";
    lista = "";
    for (var i = 0; i < usuarios.length; i++){
        lista += "<li>"+i+" - "+usuarios[i]+"</li>";
    }
    document.getElementById("lista").innerHTML = lista;
}

function buscarUsuario(elemento){
    var usuario = elemento.value;
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i] == usuario) {
            document.getElementById("resultado").innerHTML = "Encontrado usuario "+usuario+" en posición "+i;
            limpiar("buscar");
            return 0;
        }
    }
    document.getElementById("resultado").innerHTML = "Usuario "+usuario+" no encontrado.";
    elemento.value = "";
}
