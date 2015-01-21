$(document).ready(function() {

    $("#txt").on('focus', function() {
        /*coloco o valor do texto igual a vazio*/
        $(this).val('');
    });

    $("#txt").on('focusout', function() {
        /*pego o valor do campo de texto*/
        var texto = $(this).val();
        if (texto.length === 0) {
            $(this).val('Faça sua busca');
        } else {
            if (texto !== 'Faça sua busca') {
                $(this).val(texto);
            } else {
                $(this).val('Faça sua busca');
            }
        }
    });
    //$("#txt").on('keyup', function() {
    //var texto = $(this).val();
    //$("#texto_digitado").html('<span>'+texto+'</span>');
    //});

});