$(document).ready(function() {

    /*esconde o texto no inicio, quando a pagina é carregada*/
    $("#texto").hide();

    /*quando clicar no botao mostrar texto mostra o texto escondido*/
    $("#mostrar").on('click', function() {
        $("#texto").show();
    });
    /*quando clicar no botaoe sconder texto, esconde o texto*/
    $("#esconder").on('click', function() {
        $("#texto").hide();
    });

    /*on click
     $(".bt").on('click', function() {
     $('body').css('background-color', '#900');
     });
     
     $("h2").on('click', function() {
     console.log('clicou no h2');
     });
     
     $("body").on('click', function() {
     console.log('clicou no body');
     });
     */
});