$(document).ready(function() {

    var container = $("#container");
    var titulo = container.find('#titulo');
    var subtitulo = titulo.find('#subtitulo');
    var mostrar_texto = container.find('#mostrar_texto');
    //var texto = container.find('#texto');
    var mostra_texto = container.find('#mostra_texto');
    var bt_submit = container.find('#bt_submit');

    bt_submit.on('click', function(event) {
        event.preventDefault();
        mostra_texto.css({'color': '#900', 'font-weight': 'bold', 'font-size': '22px'});
    });


    //subtitulo.html('encontrou o subtitulo teste');
    //mostrar_texto.html(subtitulo.html());

});