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