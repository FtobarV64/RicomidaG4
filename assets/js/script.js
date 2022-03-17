/* Requerimientos JavaScript */
/* 2 Función para Tooltip */
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

/* 3 Evento click sobre botón con id =enviarCorreo */
  $("#enviarCorreo").click(function(){
    alert("El correo fue enviado correctamente...");
})

/* 4 Selectores de etiqueta */

$('h3#ingredientes').on('dblclick',function(){
  $('h3#ingredientes').css('color', 'red');
});

$('h3#preparacion').on('dblclick',function(){
  $('h3#preparacion').css('color', 'red');
});

/* 5 Selectores de clase */

$(".title-cards").click(function(){
  $(".ft-contenido").toggle();
})