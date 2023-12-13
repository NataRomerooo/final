$(document).ready(function () {
    $(window).scroll(function () {
        // Altura de desplazamiento para mostrar el contenido
        var alturaMostrar = 300;

        // Obtener la posición actual de desplazamiento
        var scrollPosition = $(this).scrollTop();

        // Mostrar u ocultar el elemento según la posición de desplazamiento
        if (scrollPosition > alturaMostrar) {
            $('#elementoOculto').addClass('mostrar').removeClass('oculto');
        } else {
            $('#elementoOculto').addClass('oculto').removeClass('mostrar');
        }
    });
});