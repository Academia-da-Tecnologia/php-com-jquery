$(document).ready(function() {

    /*
     * event.preventDefault - prevenir que o botao se comporte como o esperado
     * serialize - obrigatorio colocar name nos inputs, select, radio, checkbox do form
     */
    var form = $("#form");

    form.on('submit', function(e) {
        e.preventDefault();
        console.log(form.serialize());
    });

});