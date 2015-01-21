$(document).ready(function() {

    var container = $("#container");
    var tabela = container.find("#tabela");
    var tbody = tabela.find("tbody");
    var btn_id = tbody.find('.btn_id');

    /*
     * val() - pega os valores do input
     * event.currentTarget() - pega o proprio objeto clicado
     * closest() - pega o elemento mais proximo do objeto
     */
    
    tbody.on('click','.btn_id', function(event){
        event.preventDefault();
        console.log( $( event.currentTarget ).closest('tr').find('.email').val());
    });
    
   //console.log($(".email").val());

});