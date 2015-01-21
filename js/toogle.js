$(document).ready(function() {

    var container = $("#container");
    var btn_mostrar_esconder = container.find("#btn_mostrar_esconder");
    var btn_slide_up = container.find("#btn_slide_up");
    var btn_slide_down = container.find("#btn_slide_down");
    var texto = container.find("#texto");

    btn_mostrar_esconder.on('click', function() {
        //console.log('clicou no botao esconder');
        //texto.toggle(function() {
            // $(this).css({'background-color':'#000',"color" : "#FFF"});        
        //});

        //texto.fadeToggle(15000);
        texto.slideToggle('slow');
    });

    btn_slide_up.on('click', function() {
        texto.slideUp('slow');
    })

    btn_slide_down.on('click', function() {
        texto.slideDown('slow');
    })

    texto.on('click', function() {
        $(this).slideUp('slow');
    });


});