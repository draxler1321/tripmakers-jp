let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("places");
    var distancia_places = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_places >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Jinotega");
        habilidades[1].classList.add("Matagalpa");
        habilidades[2].classList.add("Masaya");
        habilidades[3].classList.add("Rivas");
        habilidades[4].classList.add("Carazo");
        habilidades[5].classList.add("Leon");
        habilidades[6].classList.add("Boaco");
        habilidades[7].classList.add("Managua");
        habilidades[8].classList.add("Rama");
        habilidades[9].classList.add("Granada");
    }
}


window.onscroll = function(){
    efectoHabilidades();
} 
$(document).ready(function() {
    // Función para mostrar el overlay
    function mostrarOverlay() {
        $(".overlay").addClass("visible");
    }

    // Función para ocultar el overlay
    function ocultarOverlay() {
        $(".overlay").removeClass("visible");
    }

    // Evento click o tap en la imagen
    $(".proyecto img").on("click tap", function() {
        mostrarOverlay();
    });

    // Evento click o tap en el overlay para cerrarlo
    $(".overlay").on("click tap", function(event) {
        // Detener la propagación del evento para evitar que se cierre el overlay inmediatamente
        event.stopPropagation();
        ocultarOverlay();
    });

    // Evento click o tap en cualquier lugar del documento para cerrar el overlay
    $(document).on("click tap", function() {
        ocultarOverlay();
    });
});