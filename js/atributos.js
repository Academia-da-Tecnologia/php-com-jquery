$(document).ready(function() {

    var container = $("#container");
    var tabela = container.find("#tabela");
    var tbody = tabela.find("tbody");
    var btn_atributos = tbody.find("#btn_atributos");
    var btn_id = tbody.find(".btn_id");
    
    //val

    btn_id.on('click', function() {
          var id = $(this).attr('data-id');
          var email = $(this).attr('data-email');
          alert(email);
    });


});