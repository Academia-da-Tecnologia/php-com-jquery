$(document).ready(function() {

    var container = $("#container");
    var texto = container.find('#texto');
    var mostra_texto = texto.find('#mostra_texto');
    var bt_submit = container.find('#bt_submit');

    /*funcoes*/
     mostra_texto.hide();
    //function mostra_emails() {
    // mostra_texto.show();
    // mostra_texto.css({'color': '#900', 'font-weight': 'bold', 'font-size': '22px'});
    //}

    //bt_submit.on('click', function(event) {
    //event.preventDefault();
    //mostra_emails();
    //});

    /*funcoes anonimas*/
    var mostra_emails = function() {
        mostra_texto.show();
        mostra_texto.css({'color': '#900', 'font-weight': 'bold', 'font-size': '22px'});
    }

    bt_submit.on('click', function(event) {
        event.preventDefault();
        mostra_emails();
    });



});