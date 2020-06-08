'use strict';

// Añadir función para obtener el día de la semana actual.
function obtenerDiaActual() {
    var diaSemanaActual = new Date();
    return diaSemanaActual.getDay();  
}

// Añadir función para que según el día que sea, se seleccione este por defecto.
function seleccionarDia() {
    // Creo una variable que seleccione la opción que coincide con el día de la semana actual.
    var elementoDia = document.querySelector(`input[value="${obtenerDiaActual()}"]`);
    // Añado al elemento seleccionado un atributo checked a true, para que salga seleccionado por defecto el día actual.
    elementoDia.setAttribute("checked", true);
}

// Añadir función para recibir parámetro de día y devolver el color.
function devolverColor(dia) {
    switch (Number(dia)) {
        case 0:
            return 'yellow';
        case 1:
            return 'red';
        case 2:
            return 'green';
        case 3:
            return 'blue';
        case 4:
            return 'pink';
        case 5:
            return 'orange';
        case 6:
            return 'purple';
    }
}

// Añadir función para que según el día seleccionado, cambie el color de fondo de la página.
function cambiarColorFondo(dia) {
    var colorDia = dia || obtenerDiaActual();
    document.body.style.backgroundColor=devolverColor(colorDia);
}

// Añadir variable que selecciona todos los elementos input.
var opcionesBotones = document.querySelectorAll("input");
// Recorrer los elementos y añadir un evento a cada uno de ellos.
opcionesBotones.forEach(function(opcion) {
    opcion.addEventListener("click", function() {
        cambiarColorFondo(this.value);
    });
})

// Llamo a las funciones para que se ejecuten al abrir la página.
seleccionarDia();
cambiarColorFondo();