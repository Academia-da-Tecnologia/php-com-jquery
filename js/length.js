$(document).ready(function() {

    var container = $("#container");
    var form_cadastro = container.find("#form_cadastro");
    var bt_cadastrar = form_cadastro.find("#bt_cadastrar");
    var mensagem = container.find("#mensagem");

    /*
     * length
     * submit
     * serialize
     * 
     */

     bt_cadastrar.on('click', function(event){
        event.preventDefault();
        
        var nome = form_cadastro.find("#nome").val();
        var email = form_cadastro.find("#email").val();
        var telefone = form_cadastro.find("#telefone").val();
        
        if(nome.length === 0){
            mensagem.html('Nome pbrigatório');
        }else if(email.length === 0){
            mensagem.html('Email pbrigatório');
        }else if(telefone.length === 0){
            mensagem.html('Telefone obrigatório');
        }else{
            mensagem.html(form_cadastro.serialize());
            //form_cadastro.submit();
        }
        
        
    });

});